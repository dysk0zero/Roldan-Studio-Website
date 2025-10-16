import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

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
  middleware: true,
  integrations: [sitemap()],
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
  output: "server",
  adapter: vercel(),
});
