# Agent Instructions

## Compatibility
- `CLAUDE.md` is the Claude Code bridge for this agent instruction file.

## Project Context
- This repository is currently a documentation-first concept collection for Celestial Mandate.
- `README.md` is the human-facing development flow until a more specific guide exists.
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
- Follow the repo's existing style once content conventions emerge; no lint, formatter, package, or build configuration exists yet.
- Do not invent setup, run, build, or test commands. When tooling is added, document exact commands here and in `README.md`.
- For concept material, prefer clear filenames, concise headings, and traceable source notes where claims or references matter.

## Verification
- No project-specific setup, run, test, lint, or build command is defined yet.
- For documentation-only changes, run `git diff --check`.
- After adding tooling, record the exact setup and verification commands in this section.
