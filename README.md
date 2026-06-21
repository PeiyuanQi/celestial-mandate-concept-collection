# Celestial Mandate Concept Collection

This repository collects concept material, reference notes, and development-flow guidance for Celestial Mandate.

## Project Website

This repo includes an Astro static website for introducing Celestial Mandate as a product and public concept collection.

- GitHub Pages can deploy this as a project site under the repository owner account.
- The preferred external website target is configured locally; deploy it with `npm run deploy-website`.
- The site is Chinese-first. The canonical homepage is `/`; English is available at `/en/`.
- Locale routes and shared content types live in `src/i18n/routes.ts` and `src/i18n/types.ts`; page copy is split under `src/i18n/pages/`, while data-pack copy lives under `src/i18n/data-packs/`.
- `src/i18n/content.ts` aggregates localized content for the Astro pages; shared page markup lives in `src/layouts/`, with individual subpage bodies under `src/layouts/subpages/`.
- When updating product copy, update the Chinese source first, then keep the English translation aligned.
- Use `资料片` as the Chinese display term for DLC; keep the English display term as `DLC`.
- Public wiki entries are generated from markdown under `../celestial-mandate/references/`. Update that source first, then run `npm run sync-wiki` to refresh `src/i18n/wiki/generated.ts` and `public/wiki-content/`. People entries can also display same-slug portrait art from `people/<slug>/portrait.png` with optional `portrait.md` provenance; generated portrait art is a visual concept asset, not historical evidence.
- Keep the site's locale typography pairing intact: Ma Shan Zheng is the Chinese display face for titles, hero text, chapter names, and expressive labels; Spectral is the English display face; Noto Sans SC is the readable body face. Use the shared `--font-display` and `--font-body` CSS variables for future website work.
- Install Git LFS before working with visual, audio, video, PDF, and design-source assets tracked by `.gitattributes`.
- Use Node.js `22.12.0` or newer.
- Install dependencies: `npm install`
- Sync public wiki content: `npm run sync-wiki`
- Run locally: `npm run dev`
- Build the static site: `npm run build`
- Build for the configured external website target: `npm run build-website`
- Deploy to the configured external website target: `npm run deploy-website`
- Preview the built site: `npm run preview`
- Astro telemetry is disabled in the project npm scripts and GitHub Pages workflow.

The GitHub Pages workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist/` when changes are pushed to `main`. In GitHub repository settings, set Pages > Source to GitHub Actions before publishing.

Use `npm run deploy-website` from this repo as the single external-site deploy command. It reads local deploy settings from a local deploy env file or environment variables, builds the Astro site for that configured URL and base path, replaces the configured target folder in the external site repo, regenerates that repo's checked-in `docs/` output, commits and pushes `main` when files changed, then publishes the live `gh-pages` branch.

The local deploy settings file is intentionally ignored by Git. It supports:

```bash
WEBSITE_SITE_URL=...
WEBSITE_BASE_PATH=...
WEBSITE_REPO_DIR=...
WEBSITE_PUBLIC_TARGET=...
WEBSITE_DOCS_TARGET=...
```

## License

This repository mixes source code and creative/reference content, so licensing is split by category.

- Source code, build scripts, configuration files, and developer tooling are licensed under the Apache License 2.0. See `LICENSE`.
- Product copy, concept text, design notes, reference summaries, visual assets, project names, and non-wiki website content are Copyright (c) 2026 Celestial Mandate contributors. All rights reserved unless a file states otherwise.
- Public wiki content is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0), unless a wiki page states otherwise.
- Third-party packages, references, images, scans, archives, and source material keep their own licenses and are not relicensed by this repository.

See `COPYRIGHT.md` for the full license-scope note.

## Development Flow

- Read `AGENTS.md` before using an agent on this repo.
- Use a git worktree for parallel or unrelated agent work. The `.worktrees/` directory is ignored for local worktrees.
- Setup: install Git LFS, use Node.js `22.12.0` or newer, then run `npm install`.
- Sync public wiki content from the adjacent research archive when wiki entries change: run `npm run sync-wiki`.
- Run locally: run `npm run dev`.
- Verify: run `npm run build` for website changes, or `npm run build-website` when preparing external-site deploy output. Use `npm run deploy-website` for the full external-site publish flow. For documentation-only changes, run `git diff --check`.
- Astro telemetry is disabled through the project npm scripts and GitHub Pages workflow.
- Keep concept notes, references, terminology, and workflow docs aligned when changing project scope or structure.
