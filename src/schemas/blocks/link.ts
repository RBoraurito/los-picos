import { defineField } from "sanity";

export const SBLink = defineField({
  name: "link",
  title: "Enlace",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isExternal",
      title: "Abrir en nueva pestaña(enlace externo)",
      description: "Marcar si el enlace es externo y debe abrirse en una nueva pestaña",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "children",
      title: "Enlaces hijos",
      type: "array",
      of: [{ type: "link" }], // Referencia a este mismo esquema
      description: "Enlaces hijos opcionales",
    },
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
    prepare({ title, url }) {
      return {
        title: title || url,
        subtitle: url,
      };
    },
  },
});
