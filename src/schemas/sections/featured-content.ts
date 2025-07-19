import { defineField } from "sanity";

export const SSFeaturedContent = defineField({
  name: "featured-content",
  title: "Contenido destacado",
  description: "Sección con contenido destacado",
  type: "object",
  fields: [
    defineField({
      name: "internalName",
      title: "Nombre interno",
      type: "string",
      description: "Nombre interno para identificar la sección",
      validation: (Rule) => Rule.required().error("El nombre interno es obligatorio"),
    }),
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
      name: "bgImage",
      title: "Imagen de fondo",
      type: "image",
      validation: (Rule) => Rule.required().error("La imagen de fondo es obligatoria"),
    }),
  ],
});
