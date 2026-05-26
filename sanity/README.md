# Sanity

Integracion embebida de Sanity Studio para este sitio editorial.

## Rutas y archivos clave

- Studio embebido: `/studio`
- Configuracion del Studio: `sanity.config.ts`
- Configuracion CLI: `sanity.cli.ts`
- Schemas: `src/sanity/schema-types`
- Cliente y queries: `src/sanity/lib`

## Variables de entorno

Parte de la configuracion puede sobrescribirse con `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=fipkcv8f
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-25
SANITY_API_READ_TOKEN=
```

## Flujo de trabajo

1. Ejecutar `npm run dev`
2. Abrir `/studio`
3. Crear contenido en:
   - Artistas
   - Eventos
   - Videoarte
   - Configuracion del sitio
4. Desplegar el schema cuando cambie con `npx sanity schema deploy`
5. Regenerar el manifiesto para Dashboard si cambian schemas o config del Studio con `npx sanity manifest extract --path public/studio/static`
