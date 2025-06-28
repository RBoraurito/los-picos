import { defineField } from "sanity";

export const SBHeader = defineField({
  name: "header",
  title: "Cabecera",
  type: "object",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "links",
      title: "Enlaces",
      type: "array",
      of: [
        {
          type: "link",
        },
      ],
    }),
    defineField({
      name: "cta",
      title: "Llamada a la acción",
      type: "link",
    }),
  ],
});
