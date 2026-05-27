import { PlayIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const videoWorkType = defineType({
  name: "videoWork",
  title: "Videoarte",
  type: "document",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Anio",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duracion",
      type: "string",
    }),
    defineField({
      name: "medium",
      title: "Formato o medio",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "technicalSheet",
      title: "Ficha tecnica",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "embedUrl",
      title: "URL de video embebido",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"] }).required(),
    }),
    defineField({
      name: "coverImage",
      title: "Imagen portada",
      type: "imageWithAlt",
    }),
    defineField({
      name: "relatedArtists",
      title: "Artistas relacionados",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "artist" }],
        }),
      ],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: "relatedEvents",
      title: "Eventos relacionados",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "event" }],
        }),
      ],
      validation: (rule) => rule.unique(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "year",
      media: "coverImage",
    },
  },
});
