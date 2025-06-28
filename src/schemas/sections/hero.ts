import { defineField } from "sanity";

export const SSHero = defineField({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
      initialValue: "Bienvenido al Club Los Picos",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
    }),
  ],
});
