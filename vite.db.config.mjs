import { defineConfig } from 'vite';
import { pluginExposeRenderer } from './vite.base.config.mjs';

export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'db'>} */
  const forgeEnv = env;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  /** @type {import('vite').UserConfig} */
  return {
    root,
    mode,
    base: './db',
    build: {
      outDir: `.vite/db/${name}`,
    },
    plugins: [pluginExposeRenderer(name)],
    resolve: {
      preserveSymlinks: true,
    },
    clearScreen: false,
  };
});
