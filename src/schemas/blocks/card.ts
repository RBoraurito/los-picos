import { defineField } from "sanity";

export const SBCard = defineField({
  name: "card",
  title: "Tarjeta",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Contenido",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cta",
      title: "Llamada a la acción",
      type: "link",
      validation: (Rule) => Rule.required().error("La llamada a la acción es obligatoria"),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
});
