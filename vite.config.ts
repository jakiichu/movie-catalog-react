import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

// https://vite.dev/config/
// Тут добавил tsconfigPaths для автоалиасов и препроцессор для сксс


export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, "src")],
        additionalData: `
          @use "common/styles/variables" as *;
        `
      }
    }
  }
});
