import { defineField, defineType } from "sanity";
import { SBHeader } from "../blocks/header";
import { SBFooter } from "../blocks/footer";

export const STGlobalConfig = defineType({
  name: "globalConfig",
  title: "Configuración global",
  type: "document",
  groups: [
    { title: "Cabecera", name: "header" },
    { title: "Pie de página", name: "footer" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
      initialValue: "Default",
    }),
    defineField({
      name: "active",
      title: "Activo",
      type: "boolean",
      description: "Indica si la configuración global está activa",
    }),
    SBHeader,
    SBFooter,
  ],
});
