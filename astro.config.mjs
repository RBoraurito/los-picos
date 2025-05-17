// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import yaml from "@rollup/plugin-yaml";
import vercel from "@astrojs/vercel/serverless";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
  adapter: vercel({}),
  integrations: [
    react(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET_NAME,
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
  ],
  experimental: {
    svg: true,
  },
});
