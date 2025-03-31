import { singleton, fields } from "@keystatic/core";
import { cta } from "~/cms/blocks/cta";

export const home = singleton({
  label: "Home",
  path: "src/content/home/",
  schema: {
    hero: fields.object(
      {
        title: fields.text({
          label: "Title",
          validation: { length: { min: 1 } },
        }),
        badge: fields.text({
          label: "Badge",
        }),
        subtitle: fields.text({
          label: "Subtitle",
          validation: { length: { min: 1 } },
        }),
        image: fields.image({
          label: "Image",
          directory: "src/assets/home",
          publicPath: "/home",
          validation: { isRequired: true },
        }),
        cta,
      },
      {
        label: "Hero section",
      }
    ),
  },
});
