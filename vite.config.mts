import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ insertTypesEntry: true }), react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'lgtm-cat-ui',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'next/link', 'next/image'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'next/link': 'Link',
          'next/image': 'Image',
        },
      },
    },
  },
});
