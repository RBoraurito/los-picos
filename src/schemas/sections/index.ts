import { defineField } from "sanity";
import { SSHero } from "./hero";

export const SBSections = defineField({
  name: "sections",
  title: "Secciones",
  type: "array",
  of: [SSHero],
  validation: (Rule) => Rule.required().min(1).error("Debe haber al menos una sección"),
});
