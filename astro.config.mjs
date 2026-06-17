import { defineConfig } from "astro/config";

const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  "celestial-mandate-concept-collection";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const githubPagesOrigin = process.env.GITHUB_REPOSITORY_OWNER
  ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
  : "http://localhost:4321";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL ?? (isGitHubPages ? githubPagesOrigin : "http://localhost:4321"),
  base: process.env.BASE_PATH ?? (isGitHubPages ? `/${repositoryName}` : "/"),
});
