import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const imageWithAltType = defineType({
  name: "imageWithAlt",
  title: "Imagen",
  type: "image",
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      title: "Texto alternativo",
      type: "string",
      description: "Opcional. Describe la imagen cuando aporte contexto editorial.",
    }),
  ],
});
