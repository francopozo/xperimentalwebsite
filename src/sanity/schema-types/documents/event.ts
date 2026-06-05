import { CalendarIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Eventos",
  type: "document",
  icon: CalendarIcon,
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
      name: "excerpt",
      title: "Extracto",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(320),
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "text",
      rows: 10,
    }),
    defineField({
      name: "startDate",
      title: "Fecha de inicio",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "Fecha de cierre",
      type: "date",
      validation: (rule) =>
        rule.required().custom((endDate, context) => {
          const startDate = context.document?.startDate;

          if (typeof startDate !== "string" || typeof endDate !== "string") {
            return true;
          }

          if (new Date(endDate) < new Date(startDate)) {
            return "La fecha de cierre debe ser igual o posterior al inicio.";
          }

          return true;
        }),
    }),
    defineField({
      name: "venue",
      title: "Sede",
      type: "string",
      description: "Opcional. Puede dejarse vacio para eventos online o sin sede fija.",
    }),
    defineField({
      name: "city",
      title: "Ciudad",
      type: "string",
      description: "Opcional. Util para eventos presenciales o hibridos.",
    }),
    defineField({
      name: "country",
      title: "Pais",
      type: "string",
      initialValue: "Bolivia",
      description: "Opcional. Puede omitirse si el evento no tiene ubicacion fisica.",
    }),
    defineField({
      name: "format",
      title: "Formato",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "statusHint",
      title: "Estado editorial",
      type: "string",
      description: "Texto corto para la home o archivo, por ejemplo: Hito fundacional.",
      validation: (rule) => rule.max(80),
    }),
    defineField({
      name: "coverImage",
      title: "Imagen portada",
      type: "imageWithAlt",
    }),
    defineField({
      name: "gallery",
      title: "Galeria",
      type: "array",
      of: [defineArrayMember({ type: "imageWithAlt" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      venue: "venue",
      city: "city",
      country: "country",
      format: "format",
      media: "coverImage",
    },
    prepare({ title, venue, city, country, format }) {
      const location = [venue, city, country].filter(Boolean).join(" · ");

      return {
        title,
        subtitle: location || format || "Evento sin ubicacion fisica",
      };
    },
  },
});
