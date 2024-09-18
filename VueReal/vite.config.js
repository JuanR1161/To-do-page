import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Explicit alias for vue-leaflet
      'vue-leaflet': 'vue-leaflet/dist/vue-leaflet.es.js', // <-- Add this line
    }
  }
});
