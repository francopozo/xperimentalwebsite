# Arquitectura

## Dominios (`src/features`)

- home
- collective
- artists
- archive
- events
- contact

## Fuente editorial

Sanity es la fuente activa para el contenido de la home. `src/lib/home-content.ts` normaliza la respuesta del CMS y conserva fallback local para que la portada siga renderizando cuando falten datos o falle la consulta.

## Sección de eventos

Separar automáticamente futuros vs pasados comparando fecha de fin o fecha principal con la fecha actual.

## Librerías clave

GSAP, Motion, Lenis para la capa de animación. Sanity como CMS headless. Despliegue en Vercel.
