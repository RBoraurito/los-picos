import { defineField } from "sanity";

export const SSDoubleContent = defineField({
  name: "double-content",
  title: "Contenido doble",
  description: "Sección con doble titulo y doble text con CTA opcional",
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
      name: "sections",
      title: "Secciones",
      type: "array",
      of: [
        defineField({
          name: "section",
          title: "Sección",
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
              name: "cta",
              title: "CTA",
              type: "array",
              of: [{ type: "link" }],
              validation: (Rule) => Rule.max(1).error("Solo se permite un CTA por sección"),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().length(2).error("Debe haber exactamente dos secciones"),
    }),
  ],
});
