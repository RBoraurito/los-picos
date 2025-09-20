import { defineField } from "sanity";
import { SSHero } from "./hero";
import { SSContentWImage } from "./content-w-image";
import { SSCardsGrid } from "./cards-grid";
import { SSDoubleContent } from "./double-content";
import { SSFeaturedContent } from "./featured-content";
import { SSTitle } from "./title";
import { SSTextBlocksWImages } from "./text-blocks-w-images";

export const SECTIONS = [
  SSHero,
  SSContentWImage,
  SSCardsGrid,
  SSDoubleContent,
  SSFeaturedContent,
  SSTitle,
  SSTextBlocksWImages,
];

export const SBSections = defineField({
  name: "sections",
  title: "Secciones",
  type: "array",
  of: SECTIONS,
  validation: (Rule) =>
    Rule.required().min(1).error("Debe haber al menos una sección"),
});
