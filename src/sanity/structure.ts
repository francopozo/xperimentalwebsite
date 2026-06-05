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
      S.listItem()
        .id("artists-root")
        .title("Artistas")
        .child(
          S.list()
            .title("Artistas")
            .items([
              S.listItem()
                .id("collective-members")
                .title("Miembros del colectivo")
                .child(
                  S.documentList()
                    .title("Miembros del colectivo")
                    .schemaType("artist")
                    .filter('_type == "artist" && artistType == "collectiveMember"'),
                ),
              S.listItem()
                .id("external-artists")
                .title("Artistas")
                .child(
                  S.documentList()
                    .title("Artistas")
                    .schemaType("artist")
                    .filter('_type == "artist" && artistType == "artist"'),
                ),
            ]),
        ),
      S.documentTypeListItem("curator").title("Curador"),
      S.documentTypeListItem("event").title("Eventos"),
      S.documentTypeListItem("videoWork").title("Videoarte"),
    ]);
