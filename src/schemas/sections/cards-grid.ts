import { defineField } from "sanity";
import { SBCard } from "../blocks/card";
import { baseSectionFields } from "./base";

export const SSCardsGrid = defineField({
  name: "cards-grid",
  title: "Grilla de tarjetas con imagen",
  description: "Sección con titulo, y tarjetas",
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
      name: "cards",
      title: "Tarjetas",
      type: "array",
      of: [SBCard],
      validation: (Rule) => Rule.required().error("Las tarjetas son obligatorias"),
    }),
    defineField({
      name: "bgImage",
      title: "Imagen de fondo",
      type: "image",
    }),
    defineField({
      name: "variant",
      title: "Variante",
      type: "string",
      options: {
        list: [{ title: "Default", value: "default" }],
      },
      initialValue: "default",
    }),
  ],
});
