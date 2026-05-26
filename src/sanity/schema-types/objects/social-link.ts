import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const socialLinkType = defineType({
  name: "socialLink",
  title: "Enlace social",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "platform",
      title: "Plataforma",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "Etiqueta visible",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"] }).required(),
    }),
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "platform",
    },
  },
});
