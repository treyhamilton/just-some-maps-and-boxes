import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        basic: resolve(__dirname, 'src/maps/basic-map/index.html'),
        addMarker: resolve(__dirname, 'src/maps/add-marker/index.html'),
        // Add more map demos here as needed
      }
    }
  },
  server: {
    open: '/index.html'
  }
});
