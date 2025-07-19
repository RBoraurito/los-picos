import { defineField } from "sanity";
import { baseSectionFields } from "./base";

export const SSTextBlocksWImages = defineField({
  name: "text-blocks-w-images",
  title: "Bloques de texto con imágenes",
  description: "Sección con bloques de texto y imágenes",
  type: "object",
  fields: [
    ...baseSectionFields,
    defineField({
      name: "images",
      title: "Imagenes",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
      validation: (Rule) => Rule.required().error("Las imágenes son obligatorias").max(3).error("Máximo 3 imágenes"),
    }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
    }),
    defineField({
      name: "blocks",
      title: "Bloques de texto",
      type: "array",
      of: [
        defineField({
          name: "textBlock",
          type: "object",
          fields: [
            {
              name: "content",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
          ],
        }),
      ],
      validation: (Rule) => Rule.required().error("Los bloques de texto son obligatorios"),
    }),
  ],
});
