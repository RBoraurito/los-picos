import { defineField } from "sanity";

export const baseSectionFields = [
  defineField({
    name: "internalName",
    title: "Nombre interno",
    type: "string",
    description: "Nombre interno para identificar la sección",
    validation: (Rule) => Rule.required().error("El nombre interno es obligatorio"),
  }),
  defineField({
    name: "titleTag",
    title: "Etiqueta del título",
    type: "string",
    description: "Etiqueta HTML del título (h1, h2, etc.)",
    options: {
      list: [
        { title: "h1", value: "h1" },
        { title: "h2", value: "h2" },
        { title: "h3", value: "h3" },
        { title: "h4", value: "h4" },
        { title: "h5", value: "h5" },
        { title: "h6", value: "h6" },
        { title: "p", value: "p" },
      ],
      layout: "radio",
    },
    initialValue: "h2",
    validation: (Rule) => Rule.required().error("La etiqueta del título es obligatoria"),
  }),
];
