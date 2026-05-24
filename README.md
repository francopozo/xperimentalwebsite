# XperimentalWebsite

Plataforma editorial para un colectivo de arte contemporáneo. Es un archivo vivo que reúne obras, artistas, eventos y notas de proceso en una sola superficie digital con tono curatorial.

El sitio funciona como una revista expandida: cada sección respira con calma editorial, la tipografía tiene presencia, las imágenes se tratan como piezas de exhibición y la navegación invita a explorar sin prisa.

---

## Qué es esto

Un sitio web para un colectivo de arte situado en La Paz, Bolivia. La identidad visual busca sofisticación tranquila: fondos color hueso y lino, textos en carbon cálido, acentos en terracota y azul grisáceo, animaciones sutiles. Nada de estética startup ni landing agresiva.

---

## Cómo está construido

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. Los datos hoy son estáticos con tipos TypeScript; más adelante se conectará Sanity como CMS headless. El despliegue está pensado para Vercel.

---

## Qué existe hoy

Una home desplegada como single-page con seis secciones:

- **Hero editorial** — navegación limpia, titular grande partido en líneas, imagen destacada y metadata del colectivo.
- **Colectivo** — manifiesto breve, notas curatoriales y enfoque del proyecto.
- **Archivo** — índice numerado de obras (con fichas que incluyen año, formato, descripción y metadata).
- **Artistas** — constelación de perfiles con foto, biografía y líneas de investigación.
- **Eventos** — agenda que separa automáticamente próximos de pasados, con fechas, sede y estado.
- **Contacto** — email y espacio para notas de proceso.

Los datos y tipos viven en `src/lib/site-content.ts`. Las imágenes son placeholders genéricos en `public/images/`. Los estilos están en `src/app/globals.css` con tokens CSS, clases utilitarias editoriales y animaciones de entrada.

---

## Qué falta construir

La base visual ya está sólida. Lo que sigue:

1. **Rutas dedicadas** — páginas individuales para cada artista, obra y evento (`/artistas/[slug]`, `/archivo/[slug]`, `/eventos/[slug]`).
2. **Componentes compartidos** — extraer ArtistCard, EventCard, ArchiveIndex, SectionHeading y demás piezas reutilizables a `src/components/`.
3. **Módulos por dominio** — poblar `src/features/` con home, collective, artists, archive, events, contact.
4. **Integración con CMS** — conectar Sanity usando los schemas definidos en `docs/content-model.md` y `sanity/schema/`.
5. **Animaciones avanzadas** — sumar GSAP, Motion y Lenis para scroll narrativo, reveal de texto por líneas, parallax suave y transiciones de página.
6. **Contenido real** — reemplazar placeholders y datos semilla con material fotográfico, biografías completas y textos definitivos del colectivo.

---

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. La home actual está en `src/app/page.tsx`, los estilos en `src/app/globals.css`, los datos en `src/lib/site-content.ts`.

Documentación de referencia en `docs/`.
