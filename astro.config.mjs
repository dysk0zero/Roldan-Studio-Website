import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpine from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://jbroldan.dev',
  i18n: {
    locales: ["en", "es", "de"],
    defaultLocale: "en",
        routing: {
      prefixDefaultLocale: false,
    },
  },
  middleware : true,
  integrations: [alpine(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/.astro/**",
          "**/playwright-report/**",
          "**/test-results/**",
        ],
      },
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
});