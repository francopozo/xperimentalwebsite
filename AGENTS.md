# AGENTS.md

## Alcance

Sitio editorial para un colectivo de arte construido con Next.js App Router, React, TypeScript y Tailwind CSS v4.
La interfaz debe sentirse intencional, curada y experimental. Evitar patrones genéricos de marketing o UI de startup.

## Prioridad ante conflictos

1. instrucción del usuario
2. configuración y scripts (`package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`)
3. código actual en `src/app`
4. documentación en `docs/`

## Política de cambios

- No agregar dependencias nuevas sin razón clara.
- Extender la estructura existente antes que reorganizar.
- Evitar refactors no relacionados.
- Mantener consistencia visual en color, tipografía, ritmo editorial y motion.
- Si una decisión visual no está cerrada, favorecer soluciones reversibles y simples.

## Comandos

- Instalar: `npm install`
- Desarrollo: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Servidor producción local: `npm run start`

## Verificación antes de cerrar cambios

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build`

## Arquitectura

- App Router en `src/app`. Shell global, fuentes y metadata en `src/app/layout.tsx`. Home en `src/app/page.tsx`.
- Tokens y base visual en `src/app/globals.css`.
- `src/components`, `src/features`, `src/lib` y `src/styles` existen como espacios de crecimiento.
- `content/` y `sanity/` preparan la capa editorial/CMS; aún no son fuente activa de datos.

## Dirección visual

- El código actual implementa una base oscura, de alto contraste y tono experimental.
- `docs/visual-style-direction.md` define una línea más cálida, editorial y serena para la evolución.
- No mezclar ambos lenguajes sin intención. Partir de lo implementado y evolucionar con criterio editorial.
- Priorizar composición, tipografía, contraste, imagen y ritmo antes que adornos.

## CI y despliegue

- CI: `npm ci` + `lint` + `typecheck`. Node 22.
- Preparado para Vercel. No asumir export estático ni SSR personalizado sin configuración explícita.
