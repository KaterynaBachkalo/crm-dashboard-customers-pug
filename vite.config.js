import { defineConfig } from "vite";
import pugPlugin from '@macropygia/vite-plugin-pug-static';
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
        input: {
          main: './src/index.pug',
          customers: "./src/customers.pug"
        },
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
      emptyOutDir: true,
      assetsInlineLimit: 0,
    },
    plugins: [
      svgSpritePlugin({
        symbolId: "icon-[name]",
        include: ["**/src/img/*.svg"],
      }),
      injectHTML(),
      pugPlugin({
        buildOptions: { basedir: "./src" },
        serveOptions: { basedir: "./src" },
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

    base: command === "serve"? "/": "/crm-dashboard-customers-pug/",
  };
});
