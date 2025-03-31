import { fields } from "@keystatic/core";

export const cta = fields.object(
  {
    text: fields.text({ label: "Text", validation: { length: { min: 1 } } }),
    url: fields.text({ label: "URL", validation: { length: { min: 1 } } }),
    variant: fields.select({
      label: "Variant",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
        { label: "Outline", value: "outline" },
        { label: "Neutral", value: "neutral" },
      ],
      defaultValue: "primary",
    }),
    external: fields.checkbox({
      label: "External Link?",
      defaultValue: false,
    }),
  },
  {
    label: "Call to Action",
  }
);
