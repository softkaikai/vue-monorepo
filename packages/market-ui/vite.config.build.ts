import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: './dist',
    lib: {
      entry: "./src/index.ts",
      name: "MarketUi",
      fileName: (format) => `market-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
            vue: "Vue",
          },
      },
    },
  },
});
