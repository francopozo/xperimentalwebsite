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
  bio: string;
  focus: string;
  years: string;
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
  { href: "#colectivo", label: "Colectivo" },
  { href: "#archivo", label: "Archivo" },
  { href: "#artistas", label: "Artistas" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contacto", label: "Contacto" },
];

export const editorialNotes: EditorialNote[] = [
  {
    eyebrow: "Linea curatorial",
    title: "Entre documento, cuerpo y frecuencia",
    body:
      "Texto provisional para enmarcar el sitio como un archivo vivo: ensayo, memoria material y activacion publica en una misma superficie.",
  },
  {
    eyebrow: "Metodo",
    title: "Investigacion situada y montaje digital",
    body:
      "Cada bloque puede crecer hacia una capa editorial mayor, pero hoy funciona como una primera constelacion de relatos, indices y rastros de procesos.",
  },
  {
    eyebrow: "Estado actual",
    title: "Primera version lista para circular",
    body:
      "Esta fase usa placeholders, lorem controlado y microtextos curatoriales para validar tono, estructura y ritmo antes de conectar contenido real.",
  },
];

export const featuredArtists: ArtistProfile[] = [
  {
    name: "Ariana Loza",
    role: "Instalacion sonora",
    years: "2019 - presente",
    focus: "escucha expandida, ruina urbana, voz encontrada",
    bio:
      "Lorem ipsum breve para una biografia de artista. La practica trabaja con grabaciones de campo, dispositivos analogicos y acciones de baja visibilidad.",
  },
  {
    name: "Mateo Sejas",
    role: "Video y performance",
    years: "2017 - presente",
    focus: "cuerpo, repeticion, montaje en vivo",
    bio:
      "Texto placeholder para describir una investigacion centrada en coreografias minimas, loop audiovisual y escenas de observacion prolongada.",
  },
  {
    name: "Lucia Vilela",
    role: "Archivo textil",
    years: "2020 - presente",
    focus: "materia, gesto manual, cartografia afectiva",
    bio:
      "Descripcion editorial provisional para una artista que cruza bordado, fotografia y piezas de sala con una sensibilidad documental y tactil.",
  },
];

export const featuredArchive: ArtworkEntry[] = [
  {
    title: "Ensayo para una vibracion opaca",
    year: "2025",
    format: "Instalacion multimedia",
    dimensions: "variable",
    summary:
      "Secuencia de luces bajas, objetos resonantes y texto suspensivo. Placeholder para una ficha de obra que prioriza tono antes que completitud.",
    note: "Registro pendiente / imagen de sala placeholder",
  },
  {
    title: "Manual para desordenar una sala",
    year: "2024",
    format: "Performance y video",
    dimensions: "24 min",
    summary:
      "Pieza de duracion corta construida sobre repeticion, desvio coreografico y una relacion inestable entre texto, respiracion y objeto.",
    note: "Edicion de archivo en proceso / sin credito final",
  },
  {
    title: "Atlas minimo del margen",
    year: "2023",
    format: "Serie fotografica",
    dimensions: "12 impresiones",
    summary:
      "Conjunto de imagenes y notas que se lee como diario visual. Sirve aqui como contenido semilla para validar ritmo editorial y estructura.",
    note: "Fondo de archivo provisional / texto lorem ajustado",
  },
];

export const events: EventEntry[] = [
  {
    title: "Sesion abierta: Escuchar el borde",
    excerpt:
      "Encuentro nocturno con escucha guiada, visuales tenues y conversacion posterior. Programacion placeholder para validar agenda futura.",
    startDate: "2026-05-08",
    endDate: "2026-05-08",
    venue: "Sala Nave",
    city: "La Paz",
    country: "Bolivia",
    format: "Presencial",
    statusHint: "Aforo reducido / registro previo",
  },
  {
    title: "Mesa de lectura para una imagen cansada",
    excerpt:
      "Conversatorio con invitados, apuntes de trabajo y una muestra de materiales en proceso. Copy provisional con tono editorial.",
    startDate: "2026-06-14",
    endDate: "2026-06-14",
    venue: "Patio Norte",
    city: "Cochabamba",
    country: "Bolivia",
    format: "Hibrido",
    statusHint: "Transmision parcial / materiales descargables",
  },
  {
    title: "Archivo de luces lentas",
    excerpt:
      "Exhibicion de piezas audiovisuales, notas murales y mediacion publica. Placeholder para un bloque de evento expandido.",
    startDate: "2026-07-22",
    endDate: "2026-08-02",
    venue: "Casa de Ensayo",
    city: "Santa Cruz",
    country: "Bolivia",
    format: "Exhibicion",
    statusHint: "Programa de visitas y recorrido comentado",
  },
  {
    title: "Residuo, gesto, repeticion",
    excerpt:
      "Programa pasado que hoy alimenta el archivo: textos, registros de sala y memoria de montaje como capas navegables.",
    startDate: "2025-11-16",
    endDate: "2025-11-20",
    venue: "Estudio Sur",
    city: "La Paz",
    country: "Bolivia",
    format: "Laboratorio",
    statusHint: "Documentacion completa / descarga pendiente",
  },
  {
    title: "Tres formas de sostener una imagen",
    excerpt:
      "Ciclo de visionado y conversacion. Esta entrada funciona como placeholder de archivo para eventos ya concluidos.",
    startDate: "2025-08-09",
    endDate: "2025-08-09",
    venue: "Archivo Vacio",
    city: "Sucre",
    country: "Bolivia",
    format: "Conversatorio",
    statusHint: "Registro sonoro y notas de sala disponibles",
  },
  {
    title: "Protocolo para una escena quieta",
    excerpt:
      "Sesion de performance, ensayo abierto y activacion publica. Texto provisional con tono descriptivo y sin datos finales.",
    startDate: "2024-10-04",
    endDate: "2024-10-06",
    venue: "Patio Central",
    city: "La Paz",
    country: "Bolivia",
    format: "Presencial",
    statusHint: "Archivo fotografico en revision",
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

  return `${eventFormatter.format(start)} - ${eventFormatter.format(end)}`;
}
