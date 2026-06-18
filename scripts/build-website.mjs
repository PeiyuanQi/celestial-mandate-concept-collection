import { spawnSync } from 'node:child_process';
import { dirname } from 'node:path';
import { loadLocalEnv, projectRoot, requireEnv } from './deploy-config.mjs';

loadLocalEnv();

const siteUrl = requireEnv('WEBSITE_SITE_URL');
const basePath = requireEnv('WEBSITE_BASE_PATH');

const result = spawnSync('npm', ['run', 'build'], {
  cwd: projectRoot,
  env: {
    ...process.env,
    PATH: `${dirname(process.execPath)}:${process.env.PATH ?? ''}`,
    SITE_URL: siteUrl,
    BASE_PATH: basePath,
  },
  stdio: 'inherit',
});

if (result.status !== 0) {
  throw new Error('Website build failed.');
}
