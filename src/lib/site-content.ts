export type NavItem = {
  href: string;
  label: string;
};

export type EditorialNote = {
  eyebrow: string;
  title: string;
  body: string;
};

export type ArtistProfile = {
  name: string;
  role: string;
};

export type ArtworkEntry = {
  title: string;
  year: string;
  format: string;
  dimensions: string;
  summary: string;
  note: string;
};

export type EventEntry = {
  title: string;
  excerpt: string;
  startDate: string;
  endDate: string;
  venue: string;
  city: string;
  country: string;
  format: string;
  statusHint: string;
};

const eventFormatter = new Intl.DateTimeFormat("es-BO", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export const navigation: NavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#origen", label: "Origen" },
  { href: "#artistas", label: "Artistas" },
  { href: "#videoarte", label: "Videoarte" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contacto", label: "Contacto" },
];

export const editorialNotes: EditorialNote[] = [
  {
    eyebrow: "Origen",
    title: "Otro modo de ver",
    body:
      "A invitacion de KIOSKO Galeria en Santa Cruz, Bolivia, se realiza el taller de Video Arte impartido por Ivan Caceres. Dirigido a estudiantes y personas que inician su vinculacion con el arte, con el objetivo de informar y formar en el ambito del videoarte desde perspectivas artisticas, expositivas y de proyectos.",
  },
  {
    eyebrow: "Iniciativa",
    title: "Dia del Video Arte Boliviano",
    body:
      "El 6 de junio de 2023 se implementa el Dia del Video Arte Boliviano, anunciado en KIOSKO Galeria. Junto a esta fecha vendran proyectos, convocatorias, catalogacion, recuperacion e implementacion de lineamientos hacia un pensamiento del video arte desde Bolivia.",
  },
];

export const featuredArtists: ArtistProfile[] = [
  { name: "Pedro Octavio Pereira", role: "Video y direccion" },
  { name: "Maria Jose Menacho", role: "Curaduria y produccion" },
  { name: "Yinimotion", role: "Animacion y arte digital" },
  { name: "Luciana Dalman", role: "Performance y fotografia" },
  { name: "Franco Ali Pozo", role: "Sonido y montaje" },
];

export const featuredArchive: ArtworkEntry[] = [
  {
    title: "Frecuencias del umbral",
    year: "2025",
    format: "Video instalacion multicanal",
    dimensions: "12 min loop",
    summary:
      "Tres pantallas dialogan en un espacio oscuro: cada una emite una frecuencia distinta de imagen-ruido.",
    note: "Exhibicion pendiente",
  },
  {
    title: "Cartografia de un cuerpo ausente",
    year: "2024",
    format: "Video performance",
    dimensions: "8 min",
    summary:
      "Un cuerpo recorre La Paz de noche trazando un mapa invisible con gestos minimos.",
    note: "Seleccion festivales 2025",
  },
  {
    title: "Atlas minimo del margen",
    year: "2023",
    format: "Serie de video-miniatura",
    dimensions: "5 piezas · 90s c/u",
    summary:
      "Cinco videos breves que funcionan como entradas de un diario visual.",
    note: "Archivo en expansion",
  },
];

export const events: EventEntry[] = [
  {
    title: "Taller de Video Arte: Otro modo de ver",
    excerpt:
      "Taller impartido por Ivan Caceres en KIOSKO Galeria. Dirigido a estudiantes y personas que inician su vinculacion con el arte. Cuatro sesiones intensivas de video creacion, edicion basica y desarrollo de obra, con sesiones individualizadas durante tres semanas adicionales.",
    startDate: "2023-02-28",
    endDate: "2023-03-03",
    venue: "KIOSKO Galeria",
    city: "Santa Cruz",
    country: "Bolivia",
    format: "Taller presencial",
    statusHint: "Concluido · origen del colectivo",
  },
  {
    title: "Anuncio: Dia del Video Arte Boliviano",
    excerpt:
      "El 6 de junio de 2023 se anuncio en KIOSKO Galeria la implementacion del Dia del Video Arte Boliviano, como parte de la iniciativa que daria origen al colectivo. Un hito fundacional para la practica del video arte en Bolivia.",
    startDate: "2023-06-06",
    endDate: "2023-06-06",
    venue: "KIOSKO Galeria",
    city: "Santa Cruz",
    country: "Bolivia",
    format: "Anuncio publico",
    statusHint: "Hito fundacional",
  },
  {
    title: "Proyeccion: Constelaciones minimas",
    excerpt:
      "Primera muestra colectiva de video arte con piezas breves de los miembros fundadores. Proyeccion en loop acompanada de una conversacion abierta sobre los procesos de cada obra.",
    startDate: "2024-09-14",
    endDate: "2024-09-14",
    venue: "Espacio Cultural Bunker",
    city: "La Paz",
    country: "Bolivia",
    format: "Proyeccion y conversatorio",
    statusHint: "Documentacion parcial",
  },
  {
    title: "Laboratorio: Imagen, materia, silencio",
    excerpt:
      "Encuentro de experimentacion de tres dias enfocado en la relacion entre video, objeto y espacio. Los participantes intervinieron una sala vacia con proyecciones y grabaciones de campo en tiempo real.",
    startDate: "2025-05-08",
    endDate: "2025-05-10",
    venue: "Taller 22",
    city: "Cochabamba",
    country: "Bolivia",
    format: "Laboratorio intensivo",
    statusHint: "Memoria en edicion",
  },
];

export function splitEventsByTimeline(referenceDate = new Date()) {
  const reference = new Date(referenceDate);

  const upcoming: EventEntry[] = [];
  const archive: EventEntry[] = [];

  for (const event of events) {
    const end = new Date(`${event.endDate}T23:59:59`);

    if (end >= reference) {
      upcoming.push(event);
      continue;
    }

    archive.push(event);
  }

  return { upcoming, archive };
}

export function formatEventRange(startDate: string, endDate: string) {
  const start = new Date(`${startDate}T12:00:00`);
  const end = new Date(`${endDate}T12:00:00`);

  if (startDate === endDate) {
    return eventFormatter.format(start);
  }

  return `${eventFormatter.format(start)} — ${eventFormatter.format(end)}`;
}
