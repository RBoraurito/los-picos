import { fields } from "@keystatic/core";

export const imageWBadge = fields.object(
  {
    image: fields.image({
      label: "Image",
      validation: { isRequired: true },
      directory: "src/assets",
      publicPath: "/",
    }),
    badge: fields.text({
      label: "Badge",
    }),
  },
  {
    label: "Image with Badge",
  }
);
