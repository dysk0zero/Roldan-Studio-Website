import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import purgecss from 'astro-purgecss';

export default defineConfig({
  site: "https://jbroldan.dev",
  trailingSlash: "never",
  i18n: {
    locales: ["en", "es", "de"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true, 
    },
  },
  middleware: false,
  integrations: [sitemap(), react(), purgecss()],
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
  output: "static",
});
