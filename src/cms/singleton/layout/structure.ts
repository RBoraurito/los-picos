import { singleton, fields } from "@keystatic/core";

export const layout = singleton({
  label: "Layout",
  path: "src/content/layout/",
  schema: {
    logo: fields.image({
      label: "Logo",
      directory: "/src/assets/layout",
      publicPath: "/layout",
    }),
    headerLinks: fields.array(
      fields.object({
        text: fields.text({ label: "Texto del enlace" }),
        url: fields.text({ label: "URL del enlace" }),
      }),
      {
        label: "Enlaces del Header",
        itemLabel: (props) => props.fields.text.value,
      }
    ),
    footerLinks: fields.array(
      fields.object({
        text: fields.text({ label: "Texto del enlace" }),
        url: fields.text({ label: "URL del enlace" }),
      }),
      {
        label: "Enlaces del Footer",
        itemLabel: (props) => props.fields.text.value,
      }
    ),
    socialMediaButtons: fields.array(
      fields.object({
        platform: fields.select({
          label: "Plataforma",
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Twitter", value: "twitter" },
            { label: "Instagram", value: "instagram" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "Whatsapp", value: "whatsapp" },
          ],
          defaultValue: "facebook",
        }),
        url: fields.text({ label: "URL del perfil" }),
      }),
      {
        label: "Botones de Redes Sociales",
        itemLabel: (props) => props.fields.platform.value,
      }
    ),
  },
});
