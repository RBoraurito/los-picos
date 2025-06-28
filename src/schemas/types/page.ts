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
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .error("El slug es obligatorio")
          .regex(/^[a-z0-9\/]+(?:-[a-z0-9\/]+)*$/)
          .error("El slug debe contener solo letras minúsculas, números, guiones y barras"),
      initialValue: "default",
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
