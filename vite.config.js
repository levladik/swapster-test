import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true
  },
  base: '/assets/',
  css: {
    devSourcemap: true, // Включение карты стилей в режиме разработки
  },
});
