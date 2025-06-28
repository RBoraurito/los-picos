import { defineField } from "sanity";

export const SBHeader = defineField({
  name: "header",
  title: "Cabecera",
  type: "object",
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
  ],
});
