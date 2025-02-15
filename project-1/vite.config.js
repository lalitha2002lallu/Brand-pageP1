import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Brand-pageP1/",  // This must match your GitHub repo name
});
