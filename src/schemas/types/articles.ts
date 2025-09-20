import { defineField, defineType } from "sanity";
import { SECTIONS } from "../sections";

export const STArticle = defineType({
  name: "article",
  title: "Artículo",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
      initialValue: "Default",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .error("El slug es obligatorio")
          .regex(/^[a-z0-9\/]+(?:-[a-z0-9\/]+)*$/)
          .error(
            "El slug debe contener solo letras minúsculas, números, guiones y barras"
          ),
      initialValue: "default",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      validation: (Rule) =>
        Rule.required().error("La descripción es obligatoria"),
    }),
    defineField({
      name: "image",
      title: "Imagen destacada",
      type: "image",
      validation: (Rule) => Rule.required().error("La imagen es obligatoria"),
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
      validation: (Rule) =>
        Rule.required().error("La fecha de publicación es obligatoria"),
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: "tags",
      title: "Etiquetas",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.required().error("Las etiquetas son obligatorias"),
      options: {
        layout: "grid",
        list: [
          { title: "Tecnología", value: "tecnologia" },
          { title: "Cultura", value: "cultura" },
          { title: "Deportes", value: "deportes" },
          { title: "Salud", value: "salud" },
          { title: "Educación", value: "educacion" },
          { title: "Negocios", value: "negocios" },
          { title: "Entretenimiento", value: "entretenimiento" },
          { title: "Noticias", value: "noticias" },
          { title: "Opinión", value: "opinion" },
          { title: "Estilo de vida", value: "estilo-de-vida" },
          { title: "Ciencia", value: "ciencia" },
        ],
      },
    }),
    defineField({
      name: "content",
      title: "Contenido",
      type: "array",
      of: [{ type: "block" }, { type: "image" }, ...SECTIONS],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Sin título",
      };
    },
  },
});
