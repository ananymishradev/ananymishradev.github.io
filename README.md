# ananymishradev.github.io

Personal site of Anany Mishra — writing, projects and a contact page.

Live at <https://ananymishradev.github.io/>.

## Stack

- [Astro](https://astro.build) 7, fully static output
- [AstroSage](https://github.com/chintak/astro-sage) theme by
  [Chintak Sheth](https://chintak.sh) (npm: `astro-sage`)
- Tailwind CSS 4, MDX, KaTeX, Expressive Code, Pagefind
- Hosted on GitHub Pages via GitHub Actions

## Run it

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # type-check, build, index with Pagefind, prune unused routes
pnpm preview    # serve the built site
```

Deployment steps, commit conventions and `.gitignore` notes live in
[DEPLOY.md](DEPLOY.md).

## Where things live

| What | Where |
| --- | --- |
| Site name, author, socials, feature flags | `sage.config.ts` |
| Posts | `src/content/posts/` |
| Standalone pages (about, contact) | `src/content/pages/` |
| Custom `/contact` route | `src/pages/contact.astro` |
| Post-build cleanup of `/archives` and `/series` | `scripts/prune.mjs` |
| Theme patches (nav order, site title font) | `patches/astro-sage@0.1.5.patch` |
| Rendered diagram cache (committed on purpose) | `.sage-cache/diagrams/` |

The `astro-sage` integration injects every route, so there is no general
`src/pages/` tree — only the one extra page for `/contact`.

## Credits

This site is **not** original theme work. All credit for the design, the
integration and the build pipeline goes to:

- **[Chintak Sheth](https://github.com/chintak)** — author of
  [AstroSage](https://github.com/chintak/astro-sage), the theme this site runs
  on. MIT licensed.
- **[Sat Naing](https://github.com/satnaing)** — author of
  [AstroPaper](https://github.com/satnaing/astro-paper), which AstroSage forks
  and rebuilds. MIT licensed.
- **[With Astro](https://astro.build)** — the framework and its ecosystem.

The full MIT text with both copyright lines is in [LICENSE](LICENSE). Local
changes to the theme are recorded as a patch in `patches/`, so they stay
auditable and easy to drop when upstream ships the same thing.

## Copyright

- **Theme and site code** — © Sat Naing (AstroPaper, 2023) and Chintak Sheth
  (AstroSage, 2026), MIT licensed. You may reuse it under the terms of
  [LICENSE](LICENSE).
- **Content** — everything under `src/content/` (posts, pages, images) is
  © Anany Mishra. All rights reserved. It is **not** covered by the MIT license
  above.

  You are welcome to **quote it with proper citation**: credit *Anany Mishra*,
  name the original post or page, and link to its URL on
  <https://ananymishradev.github.io/>. Short excerpts and discussion are fine —
  quoting to make a point is not stealing.

  Republishing posts in full, reusing images, or feeding the content to
  machine-learning models needs written permission first. Ask at
  <anany.mishra.dev@gmail.com>. See [src/content/LICENSE](src/content/LICENSE).
