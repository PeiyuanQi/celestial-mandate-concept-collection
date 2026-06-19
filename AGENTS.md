# Agent Instructions

## Compatibility
- `CLAUDE.md` is the Claude Code bridge for this agent instruction file.

## Project Context
- This repository is a documentation-first concept collection and static product website for Celestial Mandate.
- `README.md` is the human-facing development flow.
- The preferred external deploy target is configured locally and published with `npm run deploy-website`.
- Keep concept docs, reference notes, terminology, and workflow guidance aligned when scope or structure changes.

## Source Of Truth
- `AGENTS.md` is canonical for shared agent instructions.
- Update this file and `README.md` together when adding tooling, project structure, or verification commands.

## Git Workflow
- Prefer git worktrees for parallel or unrelated agent work so multiple agents can develop concurrently without colliding.
- `.worktrees/` is ignored and may be used for project-local worktrees.
- Treat existing uncommitted changes as user-owned unless told otherwise.
- Keep commits narrow; do not mix unrelated concept, reference, and workflow changes.
- Prefer rebase-based conflict resolution unless the repo later documents a merge workflow.

## Content And Coding Rules
- Follow the repo's existing style for Astro, TypeScript-flavored `.astro` files, and CSS once content conventions emerge.
- Do not invent setup, run, build, or test commands. When tooling changes, document exact commands here and in `README.md`.
- For concept material, prefer clear filenames, concise headings, and traceable source notes where claims or references matter.
- Do not copy raw reference archives, scans, ebooks, third-party images, or license-restricted source material into the public website. Prefer original product copy, original generated assets, and concise source-note summaries.
- Preserve license boundaries: source code, build scripts, configuration files, and developer tooling are Apache-2.0-licensed; product copy, concept text, reference summaries, visual assets, project names, and non-wiki content are all rights reserved unless a file states otherwise; public wiki content is CC BY-SA 4.0 unless a wiki page states otherwise.
- The website is Chinese-first: `/` is the canonical Chinese site, and `/en/` is the first supported translation. Keep Chinese copy as the ground truth in the page content files under `src/i18n/pages/` and `src/i18n/data-packs/`, then update English from that source.
- Use `资料片` as the Chinese display term for DLC; keep the English display term as `DLC`.
- The public wiki is generated from markdown under `../celestial-mandate/references/`. When asked to update wiki entries, inspect that source first, then run `npm run sync-wiki`; the current public categories are people, events, places, and chronicle/timeline. Do not sync raw archives, scans, ebooks, binaries, or unrestricted reference folders into the website.
- Preserve the Chinese typography pairing: use Ma Shan Zheng for display roles such as titles, hero text, chapter names, and expressive labels, and use Noto Sans SC for readable body copy. Keep new CSS wired through the shared `--font-display` and `--font-body` variables unless there is a documented design reason to do otherwise.
- Keep locale routes, metadata, and language switcher labels aligned when adding future languages.
- Keep `src/layouts/SubPage.astro` as the shared subpage shell; put individual subpage bodies in `src/layouts/subpages/`.

## Verification
- Setup: use Node.js `22.12.0` or newer, then run `npm install`
- Asset setup: install Git LFS before adding or changing visual, audio, video, PDF, or design-source assets tracked by `.gitattributes`.
- Sync public wiki content: `npm run sync-wiki`
- Run locally: `npm run dev`
- Build: `npm run build`
- Build for the configured external website target: `npm run build-website`
- Deploy to the configured external website target: `npm run deploy-website`
- For documentation-only changes, run `git diff --check`.
- Astro telemetry is disabled through the project npm scripts and GitHub Pages workflow.
- After adding tooling, record the exact setup and verification commands in this section.
