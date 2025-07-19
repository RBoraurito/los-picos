import { defineField } from "sanity";
import { SSHero } from "./hero";
import { SSContentWImage } from "./content-w-image";
import { SSCardsGrid } from "./cards-grid";
import { SSDoubleContent } from "./double-content";
import { SSFeaturedContent } from "./featured-content";
import { SSTitle } from "./title";

export const SBSections = defineField({
  name: "sections",
  title: "Secciones",
  type: "array",
  of: [SSHero, SSContentWImage, SSCardsGrid, SSDoubleContent, SSFeaturedContent, SSTitle],
  validation: (Rule) => Rule.required().min(1).error("Debe haber al menos una sección"),
});
