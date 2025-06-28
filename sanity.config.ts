import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { STypes } from "~/schemas/types";

let PUBLIC_SANITY_PROJECT_ID = import.meta.env?.PUBLIC_SANITY_PROJECT_ID ?? "";
let PUBLIC_SANITY_DATASET = import.meta.env?.PUBLIC_SANITY_DATASET ?? "";

if (!import.meta?.env && typeof process !== "undefined") {
  PUBLIC_SANITY_PROJECT_ID = process?.env.PUBLIC_SANITY_PROJECT_ID ?? "";
  PUBLIC_SANITY_DATASET = process?.env.PUBLIC_SANITY_DATASET ?? "";
}

export default defineConfig({
  name: "club-los-picos",
  title: "Club Los Picos",
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  plugins: [structureTool()],
  schema: {
    types: STypes,
  },
});
