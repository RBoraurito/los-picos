import { defineField } from "sanity";

export const SBFooter = defineField({
  name: "footer",
  title: "Pie de página",
  type: "object",
  group: "footer",
  fields: [
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
      name: "socialLinks",
      title: "Redes sociales",
      type: "array",
      of: [
        {
          type: "link",
        },
      ],
    }),
  ],
});
