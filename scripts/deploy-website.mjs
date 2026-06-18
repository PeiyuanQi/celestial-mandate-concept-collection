import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { loadLocalEnv, requireEnv } from './deploy-config.mjs';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, '..');

loadLocalEnv();

const personalSiteRoot = resolve(requireEnv('WEBSITE_REPO_DIR'));
const publicTargetPath = requireEnv('WEBSITE_PUBLIC_TARGET');
const docsTargetPath = requireEnv('WEBSITE_DOCS_TARGET');
const publicTarget = resolve(personalSiteRoot, publicTargetPath);
const deployMessage = process.env.DEPLOY_COMMIT_MESSAGE ?? 'Deploy Celestial Mandate project site';

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? projectRoot,
    env: {
      ...process.env,
      PATH: `${dirname(process.execPath)}:${process.env.PATH ?? ''}`,
    },
    encoding: 'utf8',
    stdio: options.capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
  });

  if (result.status !== 0) {
    const detail = options.capture ? `${result.stdout}${result.stderr}`.trim() : '';
    throw new Error(`${command} ${args.join(' ')} failed${detail ? `:\n${detail}` : ''}`);
  }

  return options.capture ? result.stdout.trim() : '';
}

function gitOutput(args, cwd) {
  return run('git', args, { cwd, capture: true });
}

function assertCleanGit(cwd, label) {
  const status = gitOutput(['status', '--porcelain'], cwd);
  if (status) {
    throw new Error(`${label} has uncommitted changes. Commit, stash, or discard them before deploying.\n${status}`);
  }
}

function assertPersonalSiteMain() {
  const branch = gitOutput(['branch', '--show-current'], personalSiteRoot);
  if (branch !== 'main') {
    throw new Error(`Personal site checkout must be on main before deploy; current branch is ${branch}.`);
  }
}

if (!existsSync(personalSiteRoot)) {
  throw new Error(`Personal site checkout was not found: ${personalSiteRoot}`);
}

console.log('Checking personal site checkout...');
assertPersonalSiteMain();
assertCleanGit(personalSiteRoot, 'Personal site checkout');

console.log('Building Celestial Mandate website...');
run('npm', ['run', 'build-website'], { cwd: projectRoot });

console.log('Copying build output into the personal site...');
rmSync(publicTarget, { recursive: true, force: true });
mkdirSync(dirname(publicTarget), { recursive: true });
cpSync(resolve(projectRoot, 'dist'), publicTarget, { recursive: true });

console.log('Regenerating personal site docs output...');
run('npm', ['run', 'predeploy'], { cwd: personalSiteRoot });

const changed = gitOutput(['status', '--porcelain'], personalSiteRoot);
if (changed) {
  console.log('Committing personal site deploy output...');
  run('git', ['add', publicTargetPath, docsTargetPath], { cwd: personalSiteRoot });
  run('git', ['commit', '-m', deployMessage], { cwd: personalSiteRoot });
  run('git', ['push', 'origin', 'main'], { cwd: personalSiteRoot });
} else {
  console.log('No personal site changes to commit.');
}

console.log('Publishing live gh-pages branch...');
run(resolve(personalSiteRoot, 'node_modules/.bin/gh-pages'), ['-d', 'docs', '-t'], {
  cwd: personalSiteRoot,
});

console.log('Published website.');
