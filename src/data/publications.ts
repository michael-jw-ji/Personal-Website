/* Two NeurIPS 2026 workshop papers from the Algoverse role. Michael is the
   fourth of seven authors on both, so the full byline ships rather than a
   trimmed one: on a portfolio, an author list that stops early reads as a
   claim about position.

   Titles, workshop names and the byline are taken from the authors' own
   repository, github.com/nolanlwin/code-model-interpretability, and agree
   with the resume. Neither paper has an arXiv page yet; `links` is a list so
   one can be appended beside the repository without touching the markup.

   Both papers point at the same repository because they share one: it
   carries the code, the dataset and both manuscripts. */
export type Publication = {
  title: string;
  /** Full workshop name, spelled out under the title. */
  venue: string;
  /** How the workshop refers to itself, for the left column. */
  venueShort: string;
  year: string;
  /** In submission order. `SELF` marks the entry to emphasise. */
  authors: string[];
  links: { href: string; label: string }[];
};

export const SELF = "Michael Ji";

const AUTHORS = [
  "Naing Oo Lwin",
  "Sree Dhyuti Nimmagadda",
  "Ark Dutt",
  SELF,
  "Randy Lim",
  "Cole Blondin",
  "Archana Vaidheeswaran",
];

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "Apparent Cross-Language Invariance Reflects Shared Identifiers in Parallel Programs",
    venue: "Workshop on Linguistic Principles for Foundation Models",
    venueShort: "LP4FM",
    year: "2026",
    authors: AUTHORS,
    links: [
      {
        href: "https://openreview.net/forum?id=wQCiQuKLPE",
        label: "OpenReview",
      },
      {
        href: "https://github.com/nolanlwin/code-model-interpretability",
        label: "GitHub",
      },
    ],
  },
  {
    title:
      "Same Score, Different Evidence: Decodability, Surface Sufficiency, and Causal Relevance in Code Models",
    venue: "Workshop on Interpretability as a Science",
    venueShort: "InterpScience",
    year: "2026",
    authors: AUTHORS,
    links: [
      {
        href: "https://github.com/nolanlwin/code-model-interpretability",
        label: "GitHub",
      },
    ],
  },
];
