import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Tarun-Moturi-Portfolio/', // Must match your repo name
  plugins: [react()],
});
