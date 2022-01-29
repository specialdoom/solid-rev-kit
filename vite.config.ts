import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-dts'
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.tsx'),
      name: 'solid-rev-kit',
      fileName: (format) => `solid-rev-kit.${format}.js`
    },
    target: 'esnext',
  }
});
