# ananymishradev.github.io

Personal site and blog, built with [Astro](https://astro.build) and the
[AstroSage](https://github.com/chintak/astro-sage) theme. Static output, deployed
to GitHub Pages.

## Development

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # type-check, build to dist/, then index with Pagefind
pnpm preview    # serve the built site
```

## Writing

- Site details, social links and feature flags: `sage.config.ts`
- Posts: `src/content/posts/` (Markdown or MDX)
- Standalone pages: `src/content/pages/`

Pages, routes, RSS, sitemap and search are injected by the `astro-sage`
integration, so there is no `src/pages/` directory.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages at <https://ananymishradev.github.io/>.
Source and settings must stay on the `GitHub Actions` Pages source for that to
work.

## Diagrams

Mermaid and Excalidraw diagrams are rendered at build time in headless Chromium.
The rendered SVGs are cached in `.sage-cache/diagrams/` and that folder is
committed, so CI needs no browser. If you add a diagram, build locally with
Playwright's Chromium installed and commit the new cache file.
