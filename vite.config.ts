import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Portfolio-2.0/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
