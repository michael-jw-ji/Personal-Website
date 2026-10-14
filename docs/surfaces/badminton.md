# Surface brief, `/badminton`

Development-only. Never copied into shipped source, markup, comments,
`data-*` attributes, serialized props, or anything delivered to a browser.

- **Route:** `/badminton`, entry `src/pages/Badminton.tsx`
- **Mode:** Persuade, the visitor decides and acts
- **Status:** candidate to replace the poker theme at `/`

## Direction contract

**THESIS.** A shuttlecock is the highest-drag projectile in sport: its flight
climbs long and then falls almost vertically, written by drag rather than by
gravity. This surface plots a career on that curve. It refuses the arrangement
this category always ships, a centred hero over a three-column card grid of
projects, and its predictable opposite, the undesigned text resume.

**OWN-WORLD.** Near-black ground. Court-line white carries structure; one warm
accent carries plotted values and nothing decorative. Monospace for every
number, unit and annotation; a tight grotesk for prose. Components are plot
furniture, axes with real units, dimension callouts with arrowheads, annotated
points, hairline gridlines at uneven intervals, leader lines. No cards, no
rounded panels, no shadow-stacked tiles.

**STORY.** The visitor understands in ten seconds that this is a national
champion who ships production software; believes it because every claim arrives
as an annotated value carrying its unit and source; and acts by opening the
resume or the email link, both reachable without scrolling.

**FIRST VIEWPORT.** Portrait left at column width, name right at
clamp(2.6rem, 7.5vw, 5.25rem), one sentence of positioning, then three
annotated rows: Now, Studying, Competing. Resume and email sit at the foot of
that column, reachable without scrolling. The sport lands third by design.

Superseded 2026-10-11. This block previously specified a solved shuttle
trajectory filling the upper third, with credentials as annotated points along
it. Michael removed the curve and asked for the portrait to lead. The open
debt that change created: the first viewport now carries no unit, no axis and
no plotted value, so it states the world in CSS without showing it. Closing
that is the next move on this surface, by giving the readout the furniture
rather than by reinstating the curve.

**FORM.** Shuttle flight aerodynamics as data graphics; fifth on the ordered
resonance list (court drawing, draw sheet, rally notation, shuttle as object,
**flight aerodynamics**, federation identity, string-bed lattice); seed
`00ad3cc9`.

**FINISH.** unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance

## Raises taken from declined challengers

- **From the alphabet sampler** (`graphic-worlds-publishing-sampler-alphabet-proof`):
  progression shown rather than asserted, the later bands are visibly looser
  than the first because she was learning as she went. Here the career plots
  along a real time axis, so growth is a readable slope instead of a claim.
- **From the broadcast signal** (`digital-design-canon-emergency-signal-degradation`):
  a persistent fixed-corner readout that never leaves the frame. Here a
  monospace status strip holds position, program and contact at all times.

## Challenger verdicts

| Challenger | Verdict | Reason |
|---|---|---|
| HyperCard shoebox stack | competitive | Holds audience identification with engineers; loses product clarity, cards hide content behind clicks, the exact failure being fixed. |
| Film cutting-bench rail | declined | Loses both axes. Strip-of-frames topology fights a scan-first read. |
| Alphabet sampler | declined | Material wrong for the audience; its progression discipline was taken. |
| Broadcast degradation | declined | Loses both axes; its fixed readout discipline was taken. |

## Motion contract

Rewritten 2026-10-11 after the curve was removed. One authored moment: the
hero's entrance cascade, and nothing else on the surface animates.

Its shape is taken from the solved flight rather than chosen. `SHUTTLE_MOTION`
in `src/lib/shuttle.ts` is generated alongside the trajectory and carries two
values. `stagger` is, per element in order, the fraction of the flight at
which the shuttle had covered that share of its arc:
`[0, 0.0714, 0.2731, 0.6989, 1]`. Drag front-loads the flight, so those gaps
widen, and the cascade decelerates the way the shuttle does instead of
ticking evenly. `ease` is a cubic-bezier fitted to normalised horizontal
progress against normalised time, `cubic-bezier(0, 0.242, 0.3, 0.883)`, RMS
0.00571 over 41 samples; it reaches a third of its travel in the first tenth
of the window, which is what v^2 drag looks like as a timing function.

The window length alone is a UI decision, 420ms of stagger over a 380ms
element duration. A literal 2.22s hang time would be unusable. Only the shape
is derived, and the brief says so rather than implying the duration is
physical too.

Everything else is state feedback only. `prefers-reduced-motion` renders the
page already settled, and `html { scroll-behavior }` is guarded in
`src/index.css`.

## Finish review, 2026-10-11

Verdict **fix**, static only: no captures exist and browser automation is
forbidden here, so rendered type, spacing optics and the real first-viewport
crop were never verified.

Fixed in that pass: `--line-faint` raised to 54% (was 3.45:1 against the
page and 3.25:1 on plates, both below AA); `--rule-strong` to 39% for the
3:1 control-boundary rule; JetBrains Mono moved ahead of `ui-monospace`, which
had been shadowing it so the webfont never once painted; the inert
`font-feature-settings` dropped; the poker gradient stopped leaking onto this
route's `body`; `scroll-behavior: smooth` given a reduced-motion escape;
section headings given a real scale step; a caption citing the deleted curve
rewritten; build scaffolding (source paths, raw filenames) gated behind DEV;
the honours card grid re-set as hairline rows; "Training base" removed as
unsourced; the dead `github: "#"` anchor on Atlas Trading View replaced;
one measured line per project surfaced from `features[0]`; the sticky header
stopped overflowing below 340px; Publications hidden until a paper has a
title.

Open, needing a decision rather than an edit: the motion contract above, and
the first viewport carrying none of the world.

## Second pass, 2026-10-11

Both open items from the finish review are closed.

**Motion** is derived rather than stock; see the rewritten contract above.

**The first viewport carries the world again.** The Now/Studying/Competing
readout is now label, value and source in three columns, because that is what
an annotated reading is: the axis names it, the value states it, the source
says who measured it. Each row carries a datum marker matching the plotted
points elsewhere, and the block opens on `.rule-h` rather than a plain border.
The organisation moved out of the prose into its own monospace column, so
nothing is said twice.

**Deliberately not done:** the reviewer also asked for a dimension callout
along the portrait's lower edge carrying a measured value. There is no
measurement a portrait can honestly carry, and furniture that measures nothing
is the costume the skill warns against, so the callout was declined rather
than invented. `.dim` keeps its one honest use in the footer.
