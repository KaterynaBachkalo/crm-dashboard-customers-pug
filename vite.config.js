import { defineConfig } from "vite";
import { glob } from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgSpritePlugin from "vite-plugin-svg-sprite";
import pugPlugin from "@vituum/vite-plugin-pug";

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    root: "src",
    assetsInclude: ["**/*.pug"],
    build: {
      sourcemap: true,

      rollupOptions: {
        input: './src/index.pug',
        // input: glob.sync("./src/*.{html,pug}"),
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
        symbolId: "icon-[name]",
        include: ["**/src/img/*.svg"],
      }),
      injectHTML(),
      pugPlugin({
        pugOptions: {
          doctype: 'html', // установка типа документа
          pretty: true     // форматированный HTML для чтения
        }
      }),
      FullReload(["./src/**/**.pug", "./src/**.pug", "./src/**/**.html"]),
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

    base: "/",
  };
});