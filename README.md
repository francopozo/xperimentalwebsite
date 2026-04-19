# XperimentalWebsite

Sitio web para un colectivo de arte con una direccion visual experimental, editorial y fine-arts.

## Estado actual

El repositorio ya incluye una base funcional con Next.js, TypeScript, Tailwind CSS v4 y ESLint, ademas de la estructura editorial inicial del proyecto.

## Objetivos del sitio

- Estetica experimental con composiciones no convencionales.
- Uso de blanco, negro y colores contrastantes como lenguaje principal.
- Animaciones avanzadas y narrativa visual por scroll.
- Seccion de eventos con actividades futuras y archivo de eventos pasados.
- Base preparada para integracion con CMS y despliegue posterior.

## Estructura inicial

- `docs/`: documentacion de arquitectura, contenido y decisiones.
- `src/app/`: futura aplicacion principal.
- `src/components/`: componentes compartidos.
- `src/features/`: modulos por dominio del producto.
- `src/lib/`: utilidades, helpers e integraciones.
- `src/styles/`: tokens y estilos globales.
- `public/`: assets publicos.
- `content/`: contenido local de referencia o seeds.
- `artists/`, `events/`, `artworks/`: espacios para material de trabajo inicial.
- `sanity/`: futura configuracion del CMS y sus schemas.
- `.github/workflows/`: CI y automatizaciones del repositorio.

## Desarrollo local

```bash
npm install
npm run dev
```

La app quedara disponible en `http://localhost:3000`.

## Siguiente paso recomendado

1. Definir la direccion visual definitiva.
2. Crear las rutas principales del sitio.
3. Integrar el sistema de eventos futuros y pasados.
4. Sumar la primera capa de animaciones avanzadas.

## GitHub

El repositorio local ya esta enlazado con `origin` a:

`https://github.com/francopozo/xperimentalwebsite.git`
