import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
  preview: {
    allowedHosts: ['devserver-main--group-travel-planner.netlify.app']
  }
});