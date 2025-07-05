import { defineField } from "sanity";

export const SSContentWImage = defineField({
  name: "content-w-image",
  title: "Contenido con Imagen",
  description: "Sección que muestra un título, texto y una imagen",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
    }),
    defineField({
      name: "text",
      title: "Texto",
      type: "text",
      validation: (Rule) => Rule.required().error("El texto es obligatorio"),
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
    }),
    defineField({
      name: "variant",
      title: "Variante",
      type: "string",
      options: {
        list: [
          { title: "Superponer", value: "merge-with-top" },
          { title: "Default", value: "default" },
        ],
      },
    }),
  ],
});
