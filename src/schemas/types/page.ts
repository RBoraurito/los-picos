import { defineField, defineType } from "sanity";
import { SBSections } from "../sections";

export const STPage = defineType({
  name: "page",
  title: "Página",
  type: "document",
  groups: [{ title: "Secciones", name: "section" }],
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
      initialValue: "Default",
    }),
    SBSections,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Sin título",
      };
    },
  },
});
