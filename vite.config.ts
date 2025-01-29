import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  root: 'src',
  plugins: [react(), eslint()],
  envDir: process.cwd(),
  publicDir: resolve(process.cwd(), 'public'),
  build: {
    outDir: '../dist',
  },
});
