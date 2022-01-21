import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'solid-rev-kit',
      fileName: (format) => `solid-rev-kit.${format}.js`
    },
    target: 'esnext',
  }
});
