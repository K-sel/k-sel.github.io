import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "./",
  build: {
    target: "modules",
    outDir: "../build",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  plugins: [vue(), tailwindcss()],
});
