# Celestial Mandate Concept Collection

This repository collects concept material, reference notes, and development-flow guidance for Celestial Mandate.

## Project Website

This repo includes an Astro static website for introducing Celestial Mandate as a product and public concept collection.

- GitHub Pages deploys this as a project site under the repository owner account: `https://<owner>.github.io/celestial-mandate-concept-collection/`.
- The site is Chinese-first. The canonical homepage is `/`; English is available at `/en/`.
- Homepage copy and locale metadata live in `src/i18n/home.ts`; shared page markup lives in `src/layouts/HomePage.astro`.
- When updating product copy, update the Chinese source first, then keep the English translation aligned.
- Use Node.js `22.12.0` or newer.
- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Build the static site: `npm run build`
- Preview the built site: `npm run preview`
- Astro telemetry is disabled in the project npm scripts and GitHub Pages workflow.

The GitHub Pages workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist/` when changes are pushed to `main`. In GitHub repository settings, set Pages > Source to GitHub Actions before publishing. GitHub Pages does not assign a repo-name subdomain to project sites; a URL like `https://celestial-mandate-concept-collection.github.io/` would require a GitHub user or organization with that exact Pages host, or an explicit custom-domain setup.

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
- Setup: use Node.js `22.12.0` or newer, then run `npm install`.
- Run locally: run `npm run dev`.
- Verify: run `npm run build` for website changes. For documentation-only changes, run `git diff --check`.
- Astro telemetry is disabled through the project npm scripts and GitHub Pages workflow.
- Keep concept notes, references, terminology, and workflow docs aligned when changing project scope or structure.
