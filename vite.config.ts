import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  root: 'src',
  plugins: [react()],
  publicDir: resolve(process.cwd(), 'public'),
})
