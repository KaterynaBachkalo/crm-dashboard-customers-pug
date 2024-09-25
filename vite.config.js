import { defineConfig } from "vite";
import { glob } from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgSpritePlugin from "vite-plugin-svg-sprite";

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    root: "src",
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js",
        },
      },
      outDir: "../dist",
    },
    plugins: [
      svgSpritePlugin({
        symbolId: "icon-[name]", // Форма назви іконки
        include: ["**/src/img/*.svg"], // Шлях до ваших іконок
      }),
      injectHTML(),
      FullReload(["./src/**/**.html"]),
      ViteImageOptimizer({
        exclude: /^sprite.svg$/,
        png: {
          quality: 60,
        },
        jpeg: {
          quality: 60,
        },
        jpg: {
          quality: 60,
        },
        webp: {
          quality: 60,
        },
      }),
    ],

    base: "/crm-dashboard-customers/",
  };
});
