---
name: sync-concept-wiki-website
description: Sync and verify the Celestial Mandate concept collection public wiki and Astro website. Use when Codex needs to update website or wiki output from the adjacent celestial-mandate references, regenerate public wiki JSON and generated TypeScript, align Chinese-first product copy and English translations, build the Astro site, run configured website deploys, or prepare commit and push work for this repository.
---

# Sync Concept Wiki Website

Use this skill for `celestial-mandate-concept-collection` work that updates the public concept site, generated wiki content, localized page copy, or configured website deployment output.

## Read Order

1. Read `AGENTS.md`.
2. Read `README.md`.
3. Read `package.json` for the exact npm scripts. Do not invent commands.
4. For wiki sync work, read `scripts/sync-wiki.mjs`.
5. For external publish work, read `scripts/build-website.mjs`, `scripts/deploy-website.mjs`, and `scripts/deploy-config.mjs`.
6. Inspect the source markdown in `../celestial-mandate/references/` before changing generated wiki output.

## Source Boundaries

- The adjacent `../celestial-mandate/references/` tree is the source for public wiki entries.
- Update source reference pages first when the wiki content itself is wrong, then run `npm run sync-wiki`.
- Do not manually edit `src/i18n/wiki/generated.ts` or `public/wiki-content/**` except to inspect generated output. Regenerate them.
- Public categories currently include people, events, places, timeline, and selected map-data reference pages.
- People entries use `people/<slug>/profile.md` as the canonical biography source. Portraits may sync from `people/<slug>/portrait.png` plus optional `portrait.md`.
- Generated portrait art and portrait provenance notes are visual concept assets, not historical evidence.
- Do not sync raw archives, scans, ebooks, binaries, unrestricted reference folders, or license-restricted material into the public site.

## Website Rules

- The site is Chinese-first. `/` is canonical Chinese, `/en/` is the first translation.
- Update Chinese page copy first under `src/i18n/pages/` or `src/i18n/data-packs/`, then align English from that source.
- Keep the display term `DLC` in English and the documented Chinese display term in Chinese copy.
- Preserve locale routes, metadata, language switcher labels, and shared content aggregation in `src/i18n/content.ts`.
- Keep `src/layouts/SubPage.astro` as the shared subpage shell and place subpage bodies under `src/layouts/subpages/`.
- Preserve typography wiring through `--font-display` and `--font-body`: Ma Shan Zheng for Chinese display roles, Spectral for English display roles, and Noto Sans SC for readable body copy.
- Respect license boundaries: code and tooling are Apache-2.0, while product copy, concept text, reference summaries, visual assets, project names, and non-wiki content are rights-reserved unless a file states otherwise.

## Workflow

1. Inspect the relevant source changes in the adjacent main repo, especially `references/`, portraits, and map-data reference pages.
2. Run `npm run sync-wiki` after wiki source changes.
3. Review generated entry count and spot-check generated JSON or page output for titles, excerpts, portrait paths, source paths, and internal links.
4. Update localized website content only from the Chinese source of truth, then align English.
5. Run `npm run build` for normal site verification.
6. Run `npm run build-website` when preparing output for the configured external website target.
7. Run `npm run deploy-website` only when the user asks to publish or deploy. It uses ignored local deploy settings or environment variables.
8. For documentation-only changes, run `git diff --check`.

## Deploy Notes

`npm run deploy-website` is the single external-site publish command for this repo. It reads local deploy settings, builds for the configured URL and base path, updates the configured external target repo, commits and pushes that target when changed, and publishes the live branch.

Do not ask the user for deploy settings unless the command fails because they are missing or invalid.

## Validation

Before finishing:

1. State whether wiki output was regenerated.
2. State which npm verification commands ran.
3. Check for accidental raw reference assets in `public/`.
4. Check that generated files are consistent with source markdown and portraits.
5. Check `git status --short` so generated output, source edits, and unrelated changes are not mixed accidentally.
