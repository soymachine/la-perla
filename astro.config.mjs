import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://soymachine.github.io",
  base: "/la-perla",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
