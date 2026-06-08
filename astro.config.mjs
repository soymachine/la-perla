import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://www.laperlacambrils.com",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
