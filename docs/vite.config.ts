import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	plugins: [solidPlugin()],
	build: {
		target: 'esnext',
		outDir: '.',
		lib: {
      entry: path.resolve(__dirname, 'index.tsx'),
      name: 'bundle',
      fileName: 'bundle.js'
    },
		polyfillDynamicImport: false,
	},
});
