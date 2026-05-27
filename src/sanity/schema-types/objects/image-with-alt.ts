import { ImageIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const imageWithAltType = defineType({
  name: "imageWithAlt",
  title: "Imagen",
  type: "image",
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
});
