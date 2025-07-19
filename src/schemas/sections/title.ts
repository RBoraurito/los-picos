import { defineField } from "sanity";
import { baseSectionFields } from "./base";

export const SSTitle = defineField({
  name: "title",
  title: "Titulo",
  type: "object",
  fields: [
    ...baseSectionFields,
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
    }),
    defineField({
      name: "variant",
      title: "Variante",
      type: "string",
      validation: (Rule) => Rule.required().error("La variante es obligatoria"),
      initialValue: "default",
      options: {
        list: [{ title: "Default", value: "default" }],
      },
    }),
  ],
});
