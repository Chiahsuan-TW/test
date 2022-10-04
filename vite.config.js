import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      extensions: ["vue"],
      dirs: [
        { dir: "src/modules/root/pages", baseRoute: "" },
        { dir: "src/modules/repair/pages", baseRoute: "repair" },
      ],
    }),
    Layouts({
      defaultLayout: "Default.layout",
      layoutsDir: "src/shared/layouts",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
