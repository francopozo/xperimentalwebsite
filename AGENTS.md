# AGENTS.md

## Alcance del proyecto
- Sitio editorial para un colectivo de arte construido con Next.js App Router, React, TypeScript y Tailwind CSS v4.
- El producto mezcla archivo cultural, artistas, obras y eventos; hoy existe una base inicial y una home provisional.
- La interfaz debe sentirse intencional, curada y experimental. Evitar patrones genéricos de marketing o UI de startup.

## Fuente de verdad
- Priorizar el estado actual del repositorio y la configuración ejecutable: `package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs` y `.github/workflows/ci.yml`.
- Usar la implementación vigente en `src/app` como referencia principal para arquitectura real.
- Usar `docs/` como guía de dirección, no como contrato rígido.
- Si hay conflicto entre docs, código y una instrucción explícita del usuario, seguir este orden:
  1. instrucción del usuario
  2. configuración y scripts
  3. código actual
  4. documentación en prosa

## Política de cambios
- No agregar dependencias nuevas sin una razón clara.
- Preferir extender la estructura existente antes que reorganizar el proyecto.
- Evitar refactors no relacionados con la tarea.
- Mantener consistencia visual en color, tipografía, ritmo editorial y motion.
- Si una decisión visual no está cerrada, favorecer soluciones reversibles y simples.

## Stack y comandos canónicos
- Gestor de paquetes: `npm` (`package-lock.json` es la referencia actual).
- Versión de Node en CI: `22`.
- Instalar: `npm install`
- Desarrollo: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build de producción: `npm run build`
- Servidor de producción local: `npm run start`

## Verificación mínima
- Antes de cerrar cambios relevantes, correr en este orden:
  1. `npm run lint`
  2. `npm run typecheck`
  3. `npm run build`

## Notas de arquitectura
- La app usa App Router bajo `src/app`.
- Shell global, fuentes y metadata base viven en `src/app/layout.tsx`.
- La home actual vive en `src/app/page.tsx`.
- Los tokens globales y la base visual están en `src/app/globals.css`.
- `src/components`, `src/features`, `src/lib` y `src/styles` existen como espacios de crecimiento, pero aún están casi vacíos.
- `content/` y `sanity/` preparan la futura capa editorial/CMS; por ahora no son la fuente activa de datos.

## Dirección visual
- Hoy el código implementa una base oscura, de alto contraste y tono experimental.
- En `docs/visual-style-direction.md` también existe una línea más cálida, editorial y serena para la evolución del proyecto.
- No mezclar ambos lenguajes sin intención. Si no hay instrucción nueva, partir de lo que ya está implementado y evolucionarlo con criterio editorial.
- Priorizar composición, tipografía, contraste, imagen y ritmo antes que adornos.

## Despliegue y CI
- CI actual: instala con `npm ci` y corre `lint` + `typecheck`.
- El proyecto está preparado para despliegue en Vercel.
- No asumir export estático ni SSR personalizado mientras eso no quede definido en configuración.
