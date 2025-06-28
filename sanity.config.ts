import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { STypes } from "~/schemas/types";

export default defineConfig({
  name: "club-los-picos",
  title: "Club Los Picos",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "",
  plugins: [structureTool()],
  schema: {
    types: STypes,
  },
});
