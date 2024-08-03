import { defineConfig, mergeConfig } from 'vite';
import {
  getBuildConfig,
  pluginHotRestart,
} from './vite.base.config.mjs';

// https://vitejs.dev/config
export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'build'>} */
  const forgeEnv = env;
  const { forgeConfigSelf } = forgeEnv;
  /** @type {import('vite').UserConfig} */
  const config = {
    build: {
      rollupOptions: {
        external: ['drizzleOrm'],
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: forgeConfigSelf.entry,
        output: {
          format: 'iife',
          // It should not be split chunks.
          inlineDynamicImports: false,
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
    plugins: [
      pluginHotRestart('reload')
    ],
    resolve: {
      preserveSymlinks: true,
    },
  };

  return mergeConfig(getBuildConfig(forgeEnv), config);
});
