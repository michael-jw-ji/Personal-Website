# PRODUCT.md, Michael Ji, personal site

Durable product truth. No visual decisions live here; those belong in DESIGN.md
and the surface briefs.

## Platform

`web`. Desktop-first in usage, but phone traffic is real (links shared from
LinkedIn and messages open on a phone) and must be first-class.

## Primary user and job

A **software engineering recruiter or hiring manager at a startup or fintech
company**, arriving from a resume link, a LinkedIn profile, or a referral.

They are scanning, not reading. Their job is a single decision, *is this
person worth a call?*, and they make it in well under a minute, often on a
phone between other tasks. Everything else on the site is secondary to getting
them to that decision with the strongest true evidence.

Secondary audiences, in order: quant recruiters (same scan, more weight on
quantitative and research work), the badminton community, and his own network.

**Hierarchy decision (confirmed 2026-10-08, sharpened after first build):**
badminton is the *frame*; engineering is the *content*. The first build got
this wrong by letting badminton be both, it opened with shuttle physics and
put the competition record ahead of the work. Corrected: engineering leads the
copy, the first numbers on the page are engineering numbers, and the
competition record sits after the work rather than before it. A visitor must
read "software engineer" before they read "champion". The athletics make the site memorable and give it
a reason to exist as something other than a resume restated. The engineering
work gets the space, the detail and the metrics. A visitor who remembers only
one thing should remember a national champion who ships production software ,
in that order of surprise, not that order of emphasis.

## What is meaningfully different

Three things are true at once, and the combination is the position:

1. **Elite athlete.** Multiple-time Badminton Canada National Elite Champion
   (singles, doubles and mixed doubles) and a representative at the 2023/2024
   BWF World Junior Championships. Almost no one in the applicant pool has
   this, and it reads as discipline and coachability rather than as a hobby.
2. **Production AI/LLM engineering, not coursework.** An internal policy
   assistant at Rogers serving 5K+ users and 35K+ weekly queries at 3s p95,
   with request-validation middleware that blocked 95% of 250+ adversarial
   test cases. A Claude-powered report generator at Communitech over four
   unified source systems.
3. **Ships end to end and measures it.** At Enns Real Estate, a brokerage
   listings platform taken from schema design to deployment solo: 40% faster
   listing pages via ISR and Postgres filter indexes, CI gating every PR, zero
   failed production deploys.

Supporting: ML research at Algoverse with two papers accepted at NeurIPS 2026
workshops, and infrastructure work at Mackenzie Health.

## Durable facts and assets that future work must preserve

- **Program:** Computing and Financial Management (CFM), University of Waterloo.
- **Credentials:** as listed above. These are load-bearing and must never be
  paraphrased into something stronger or weaker than the source resume.
- **Owned logo assets** in `src/assets/`: `badminton_canada_logo.png`,
  `bwf_logo.jpg`, `kc_badminton_club_logo.jpeg`, plus employer logos
  (Communitech, Enns, Rogers, Algoverse, Mackenzie Health) and certification
  marks (AWS, DeepLearning.AI).
- **Resume:** `public/Resume - Michael Ji.pdf`, linked from the hero.
- **Contact:** michael.jw.ji@gmail.com · github.com/michael-jw-ji ·
  linkedin.com/in/michael-jw-ji
- **Photography:** none owned yet. Slots are specified and left empty rather
  than filled with stock images of other players; see `docs/PHOTO-BRIEF.md`.

## Constraints

- **Stack is fixed:** Vite + React 18 + TypeScript + Tailwind 3 + shadcn/ui
  (Radix), HSL custom-property token system in `src/index.css`.
  `tailwindcss-animate` is disabled, so shadcn's `animate-in` / `fade-*` /
  `zoom-*` utilities emit nothing and motion must be authored directly.
- **Factual content is never invented or embellished.** Every metric, date and
  claim traces to the resume or to a repository that can be checked.
- **No poker-skill claims anywhere**, in any theme, he plays casually. The
  equivalent rule applies to any future frame: the metaphor must not assert
  expertise he does not have. Badminton is the exception that proves it; there
  the claims are real and documented.
- **Verification is non-visual.** Browser automation is not used in this
  project by the owner's instruction; correctness is checked with
  `tsc --noEmit -p tsconfig.app.json`, `eslint`, `npm run build` and targeted
  greps, and visual confirmation comes from screenshots the owner supplies.

## Accessibility

Production-grade is the bar (confirmed 2026-10-08, since this is a candidate to
replace the live site): real keyboard paths, visible focus, honest alt text,
`prefers-reduced-motion` honored by every animation, and contrast that holds at
AA for body copy.

## Success

A recruiter who spends thirty seconds can name where he worked, what he built,
and one number that makes it concrete, without clicking anything. Everything
beyond that is depth for the people who choose to go deeper.
