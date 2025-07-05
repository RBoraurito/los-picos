import { defineField } from "sanity";
import { SSHero } from "./hero";
import { SSContentWImage } from "./content-w-image";

export const SBSections = defineField({
  name: "sections",
  title: "Secciones",
  type: "array",
  of: [SSHero, SSContentWImage],
  validation: (Rule) => Rule.required().min(1).error("Debe haber al menos una sección"),
});
