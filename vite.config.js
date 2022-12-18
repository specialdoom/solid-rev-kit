import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'solid-rev-kit',
      formats: ["es", "cjs"],
      fileName: (format) => format === "es" ? `solid-rev-kit.mjs` : `solid-rev-kit.cjs`
    },
    rollupOptions: {
      external: ['solid-js', 'solid-styled-components', 'tippyJs'],
      output: {
        globals: {
          ['solid-js']: 'solidJs',
          ['solid-styled-components']: 'solidStyledComponents',
          ['tippy.js']: 'tippyJs'
        }
      }
    }
  }
});
