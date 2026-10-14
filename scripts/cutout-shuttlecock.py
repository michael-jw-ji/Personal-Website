"""
Cuts the supplied shuttlecock illustration out of its background.

The naive approach, keying out white, destroys this image: the cork and the
feathers are themselves white, so a colour key punches holes straight through
the subject. What actually separates subject from background here is not
colour but connectivity, so this floods inward from the four corners and
removes only the contiguous outer region. Anything white that is fenced in by
the black outline survives.

The alpha edge is then feathered by a fraction of a pixel. A hard binary mask
on a line drawing leaves visible stair-stepping along every curve once it is
composited onto a dark page.

Run:  python scripts/cutout-shuttlecock.py <source.jpg>
Out:  src/assets/shuttlecock.png
"""

import sys
from pathlib import Path

import numpy as np
import scipy.ndimage as ndi
from PIL import Image, ImageFilter

OUT = Path("src/assets/shuttlecock.png")
TARGET_H = 320          # plenty for a bullet at any DPR, still a small file
BG_TOLERANCE = 26       # how far from the sampled corner colour still counts
EDGE_FEATHER = 0.6      # px


def main(src: Path) -> None:
    img = Image.open(src).convert("RGB")
    arr = np.asarray(img).astype(np.int16)
    h, w, _ = arr.shape

    # The background colour is whatever sits in the corners, not an assumed
    # pure white: this illustration sits on a warm off-white.
    corners = np.stack(
        [arr[0, 0], arr[0, w - 1], arr[h - 1, 0], arr[h - 1, w - 1]]
    )
    bg = corners.mean(axis=0)
    dist = np.abs(arr - bg).max(axis=2)

    # Label every connected run of background-coloured pixels, then keep only
    # the components that touch an edge. Those are the outside; anything that
    # matches the background colour but is fenced in by the drawing is part of
    # the subject and stays.
    #
    # Deliberately not PIL's ImageDraw.floodfill, which is a silent no-op in
    # Pillow 12.1.1: it returns without filling even a uniform test image, so
    # the cutout appears to run and changes nothing.
    candidate = dist <= BG_TOLERANCE
    labels, _count = ndi.label(candidate)
    edge = np.concatenate(
        [labels[0, :], labels[-1, :], labels[:, 0], labels[:, -1]]
    )
    outside_labels = np.unique(edge[edge > 0])
    outside = np.isin(labels, outside_labels)
    alpha = Image.fromarray(np.where(outside, 0, 255).astype(np.uint8), "L")
    alpha = alpha.filter(ImageFilter.GaussianBlur(EDGE_FEATHER))

    out = img.convert("RGBA")
    out.putalpha(alpha)

    # Crop to the subject, measured on alpha alone. getbbox() on an RGBA image
    # reads every band, and the background pixels are still white underneath
    # their zeroed alpha, so it would report the whole canvas.
    bbox = alpha.getbbox()
    if bbox:
        out = out.crop(bbox)

    ratio = TARGET_H / out.height
    out = out.resize(
        (max(1, round(out.width * ratio)), TARGET_H), Image.LANCZOS
    )

    # Flat line art has very few distinct colours, so truecolour RGBA is
    # almost entirely wasted headroom: palettising takes this from ~64 KB to
    # ~9 KB. FASTOCTREE because it is one of only two methods Pillow allows on
    # an RGBA image, and it keeps the feathered alpha edge intact.
    out = out.quantize(colors=48, method=Image.FASTOCTREE, dither=Image.NONE)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    out.save(OUT, optimize=True)

    opaque = int((np.asarray(out.convert("RGBA"))[:, :, 3] > 8).sum())
    print(f"source      {src}")
    print(f"background  rgb{tuple(int(c) for c in bg)}")
    print(f"written     {OUT}  {out.width}x{out.height}  "
          f"{OUT.stat().st_size / 1024:.1f} KB")
    print(f"opaque      {opaque / (out.width * out.height):.1%} of the box")


if __name__ == "__main__":
    main(Path(sys.argv[1]))
