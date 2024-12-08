import { defineConfig } from 'vite'; // Импортируйте defineConfig

export default defineConfig({
  css: {
    devSourcemap: true, // Включение карты стилей в режиме разработки
  },
  build: {
    sourcemap: true, // Включение карты стилей в режиме сборки
  },
});
