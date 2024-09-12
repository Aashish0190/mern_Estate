import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        secure: false,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Adjust chunk size limit (in kilobytes), here set to 1000kb (1MB)
  },
  plugins: [react()],
});
