// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import yaml from "@rollup/plugin-yaml";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
  adapter: vercel({}),
  integrations: [react(), markdoc(), keystatic()],
  experimental: {
    svg: true,
  },
});
