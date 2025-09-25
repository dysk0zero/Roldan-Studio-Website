import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpine from "@astrojs/alpinejs";

export default defineConfig({
  i18n: {
    locales: ["en", "es", "de"],
    defaultLocale: "en",
        routing: {
      prefixDefaultLocale: false,
    },
  },
  middleware : true,
  integrations: [alpine()],
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
