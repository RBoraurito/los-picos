import { defineField, defineType } from "sanity";
import { SBHeader } from "../blocks/header";
import { SBFooter } from "../blocks/footer";

export const STGlobalConfig = defineType({
  name: "globalConfig",
  title: "Configuración global",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
      initialValue: "Default",
    }),
    SBHeader,
    SBFooter,
  ],
});
