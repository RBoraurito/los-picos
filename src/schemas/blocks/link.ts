import { defineField } from "sanity";

const linkType = [
  { title: "Interno", value: "internal" },
  { title: "Externo", value: "external" },
  { title: "Descarga", value: "download" },
];

const linkIcon = [
  { title: "Ninguno", value: "" },
  { title: "Enlace", value: "link" },
  { title: "Descarga", value: "download" },
  { title: "Instagram", value: "instagram" },
  { title: "Facebook", value: "facebook" },
  { title: "Youtube", value: "youtube" },
];

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
      name: "type",
      title: "Tipo de enlace",
      description: "Selecciona el tipo de enlace",
      type: "string",
      options: {
        list: linkType,
      },
      initialValue: "internal",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "icon",
      title: "Icono",
      type: "string",
      description: "Nombre del icono a usar",
      options: {
        list: linkIcon,
      },
      initialValue: "",
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
