import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content : ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
        }),
        autoprefixer(),
        pxtorem({
          rootValue: 20,
          unitPrecision: 5,
          propList: ["*"],
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
