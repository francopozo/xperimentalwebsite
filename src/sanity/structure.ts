import type { StructureResolver } from "sanity/structure";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("Configuracion del sitio")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("site-settings"),
        ),
      S.divider(),
      S.documentTypeListItem("artist").title("Artistas"),
      S.documentTypeListItem("event").title("Eventos"),
      S.documentTypeListItem("videoWork").title("Videoarte"),
    ]);
