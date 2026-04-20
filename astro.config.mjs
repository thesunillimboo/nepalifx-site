import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Tailwind v4 uses a Vite plugin instead of an Astro integration
  vite: {
    plugins: [tailwindcss()],
  },
});
