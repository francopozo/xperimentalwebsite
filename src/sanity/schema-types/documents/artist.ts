import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const artistType = defineType({
  name: "artist",
  title: "Artistas",
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
      name: "role",
      title: "Rol o linea de exploracion",
      type: "string",
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
    defineField({
      name: "featuredOrder",
      title: "Orden destacado",
      type: "number",
      description: "Usa valores bajos para mostrar primero en la home.",
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "portrait",
    },
  },
});
