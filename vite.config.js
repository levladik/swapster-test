import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true
  },
  base: '/swapster-test/',
  css: {
    devSourcemap: true, // Включение карты стилей в режиме разработки
  },
});
