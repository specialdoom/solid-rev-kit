import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.tsx'),
      name: 'solid-rev-kit',
      fileName: (format) => `solid-rev-kit.${format}.js`,
    },
    target: 'esnext',
    rollupOptions: {
      external: ['solid-js', 'solid-styled-components'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          ['solid-js']: 'solidJs',
          ['solid-styled-components']: 'solidStyledComponents'
        }
      }
    }
  },
});
