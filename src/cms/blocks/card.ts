import { fields } from "@keystatic/core";

export const card = fields.object(
  {
    title: fields.text({ label: "Title", validation: { isRequired: true } }),
    supportText: fields.text({ label: "Support Text" }),
    content: fields.markdoc.inline({ label: "Content" }),
    image: fields.image({ label: "Image", directory: "src/assets", publicPath: "/", validation: { isRequired: true } }),
  },
  {
    label: "Card",
  }
);

export interface ICard {
  title: string;
  supportText?: string;
  content: string;
  image: string;
}
