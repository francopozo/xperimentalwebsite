import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const curatorType = defineType({
  name: "curator",
  title: "Curador",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Bio corta",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: "longBio",
      title: "Bio larga",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "curatorNote",
      title: "Comentario del curador",
      type: "text",
      rows: 8,
      description:
        "Texto editorial o palabras del curador para futuras secciones especiales.",
    }),
    defineField({
      name: "portrait",
      title: "Retrato",
      type: "imageWithAlt",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "links",
      title: "Enlaces",
      type: "array",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "portrait",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Curador",
      };
    },
  },
});
