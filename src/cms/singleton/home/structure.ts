import { singleton, fields } from "@keystatic/core";
import { card } from "~/cms/blocks/card";
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
    featuredInfo: fields.object(
      {
        supportText: fields.text({
          label: "Support text",
        }),
        title: fields.text({
          label: "Title",
          validation: { isRequired: true },
        }),
        subtitle: fields.text({
          label: "Subtitle",
          validation: { isRequired: true },
        }),
        content: fields.markdoc.inline({
          label: "Content",
        }),
        images: fields.array(
          fields.image({
            label: "Image",
            directory: "src/assets/home",
            publicPath: "/home",
            validation: { isRequired: true },
          }),
          {
            label: "Images",
            validation: {
              length: {
                min: 2,
                max: 4,
              },
            },
          }
        ),
      },
      {
        label: "Featured info",
      }
    ),
    columns: fields.object({
      title: fields.text({
        label: "Title",
      }),
      content: fields.markdoc.inline({
        label: "Content",
      }),
      columns: fields.array(
        fields.object({
          title: fields.text({
            label: "Title",
            validation: { isRequired: true },
          }),
          content: fields.markdoc.inline({
            label: "Content",
          }),
        }),
        {
          label: "Columns",
          itemLabel: (item) => item.fields.title.value,
          validation: {
            length: {
              min: 3,
            },
          },
        }
      ),
    }),
    highlightedContent: fields.object(
      {
        title: fields.text({
          label: "Title",
          validation: { isRequired: true },
        }),
        content: fields.markdoc.inline({
          label: "Content",
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
        label: "Highlighted content",
      }
    ),
    activities: fields.object(
      {
        supportText: fields.text({
          label: "Support text",
        }),
        title: fields.text({
          label: "Title",
          validation: { isRequired: true },
        }),
        content: fields.markdoc.inline({
          label: "Content",
        }),
        cards: fields.array(card, {
          label: "Cards",
          itemLabel: (item) => item.fields.title.value,
          validation: {
            length: {
              min: 3,
            },
          },
        }),
      },
      {
        label: "Activities",
      }
    ),
    faq: fields.object(
      {
        title: fields.text({
          label: "Title",
          validation: { isRequired: true },
        }),
        faqs: fields.array(
          fields.object({
            question: fields.text({
              label: "Question",
              validation: { isRequired: true },
            }),
            answer: fields.text({
              label: "Answer",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "FAQs",
            itemLabel: (item) => item.fields.question.value,
            validation: {
              length: {
                min: 3,
              },
            },
          }
        ),
      },
      {
        label: "FAQs",
      }
    ),
  },
});
