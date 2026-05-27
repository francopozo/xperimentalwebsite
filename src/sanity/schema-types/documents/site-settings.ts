import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Configuracion del sitio",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "siteTitle",
      title: "Titulo del sitio",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Descripcion del sitio",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactEmail",
      title: "Email de contacto",
      type: "string",
      validation: (rule) => rule.email().required(),
    }),
    defineField({
      name: "collaborationText",
      title: "Texto de colaboracion",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "socialLinks",
      title: "Redes sociales",
      type: "array",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
    defineField({
      name: "heroImage",
      title: "Imagen de Inicio",
      type: "imageWithAlt",
    }),
    defineField({
      name: "aboutLeadImage",
      title: "Imagen de Sobre",
      type: "imageWithAlt",
    }),
    defineField({
      name: "aboutMeaningImage",
      title: "Imagen secundaria de Sobre",
      type: "imageWithAlt",
    }),
    defineField({
      name: "originImage",
      title: "Imagen de Origen",
      type: "imageWithAlt",
    }),
    defineField({
      name: "eventsHeroImage",
      title: "Imagen principal de Eventos",
      type: "imageWithAlt",
    }),
    defineField({
      name: "featuredArtists",
      title: "Artistas destacados",
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
      name: "featuredEvent",
      title: "Evento destacado",
      type: "reference",
      to: [{ type: "event" }],
    }),
    defineField({
      name: "featuredVideos",
      title: "Videos destacados",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "videoWork" }],
        }),
      ],
      validation: (rule) => rule.unique(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Configuracion del sitio",
      };
    },
  },
});
