# Arquitectura inicial

## Stack objetivo

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- Motion
- Lenis
- Sanity
- Vercel
- GitHub

## Principios

- La capa visual debe ser custom y evitar patrones genericos.
- Las animaciones deben estar al servicio del relato visual.
- El contenido editorial y de eventos debe poder mantenerse sin tocar codigo.
- El sitio debe mantener buen rendimiento incluso con motion avanzado.

## Estructura propuesta

### `src/app`

Rutas, layouts, metadata y entrypoints del sitio.

### `src/components`

Piezas reutilizables de UI, tipografia, media y navegacion.

### `src/features`

Modulos por dominio:

- home
- collective
- artists
- archive
- events
- contact

### `src/lib`

Utilidades tecnicas:

- animacion
- cms
- fecha y formateo
- seo

### `src/styles`

Sistema visual base:

- variables CSS
- tokens de color
- escalas tipograficas
- helpers de layout

### `content`

Contenido local inicial o seeds de apoyo durante el desarrollo.

### `sanity/schema`

Schemas del CMS para:

- artistas
- eventos
- obras/proyectos
- paginas editoriales
- configuracion global del sitio

## Seccion de eventos

La seccion de eventos debe separar automaticamente:

- futuros
- pasados

El criterio ideal es comparar fecha de fin o fecha principal con la fecha actual.

## GitHub

Flujo sugerido:

- `main` para produccion
- ramas `feature/...` para trabajo incremental
- integracion futura con Vercel para previews
