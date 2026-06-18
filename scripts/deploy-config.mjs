import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const projectRoot = resolve(new URL('..', import.meta.url).pathname);
export const localEnvPath = resolve(projectRoot, '.local/website-deploy.env');

export function loadLocalEnv() {
  if (!existsSync(localEnvPath)) {
    return;
  }

  const lines = readFileSync(localEnvPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separator = trimmed.indexOf('=');
    if (separator === -1) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    process.env[key] ??= value;
  }
}

export function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}. Set it in ${localEnvPath} or in the environment.`);
  }

  return value;
}
