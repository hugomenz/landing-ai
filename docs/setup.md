# Landing AI setup

## Qué hace la app

Landing Angular para Hugo Menz con secciones de servicios, proyectos, portfolio de fotos, reviews, contacto y un panel privado de edición. El contenido editable que se añade desde el panel se guarda en `localStorage` por ahora; la integración preparada para producción es Firebase.

## CI antes de mergear en `master`

Los workflows están en `.github/workflows/`:

- `ci.yml`: en cada push a `develop` y PR hacia `master` instala dependencias, compila, corre unit tests y corre behavior/e2e tests con Playwright.
- `code-quality.yml`: ejecuta `npm audit` y CodeQL para detectar dependencias vulnerables y problemas de seguridad.

Recomendación: proteger `master` para exigir que ambos workflows pasen antes de mergear y trabajar siempre en ramas que acaben en `develop` antes del PR final a `master`.

## Firebase elegido

Elegí Firebase porque encaja bien con Google Auth, hosting estático, Storage para fotos y Firestore para proyectos/reviews sin montar backend propio.

Para activar login real:

1. Crear un proyecto en Firebase.
2. Activar Authentication > Google provider.
3. Restringir dominios autorizados al dominio real y dominios de preview necesarios.
4. Copiar la config web en `src/app/core/config/auth.config.ts` o reemplazarla en deploy con variables de entorno.
5. Cambiar `enabled` a `true`.
6. Reemplazar `allowedGoogleEmails` por tu email real y, tras el primer login, añadir tu UID en `allowedGoogleUids` para una segunda verificación.
7. Crear reglas de Firestore/Storage que solo permitan escritura al UID autorizado.

Las claves tipo `apiKey` de Firebase web no son secreto real, pero no dan permiso por sí solas: la seguridad debe venir de dominios autorizados, Auth allowlist y reglas de Firebase.

## Login secreto de admin

El panel privado no aparece en la UI normal. Se abre con el shortcut `Ctrl + Alt + H`. Después requiere Google Auth y solo acepta emails/UIDs configurados en `auth.config.ts`. Si Firebase está desactivado, el botón informa que falta configuración y nadie puede editar.

Desde el panel privado se pueden añadir:

- proyectos nuevos,
- reviews/testimonios,
- fotos del portfolio.

## Configuración separada

La configuración queda organizada por función en `src/app/core/config/`:

- `auth.config.ts`: shortcut, Google allowlist y Firebase.
- `theme.config.ts`: tema y toggles.
- `links.config.ts`: links base como booking/email.
- `portfolio.config.ts`: fotos y reviews iniciales.
- `storage.config.ts`: claves de almacenamiento local.
- `texts.config.ts`: textos específicos del admin.
- `site.config.ts`: contenido principal existente de la landing.

## Tracking

`site.config.ts` conserva IDs placeholder para Google Analytics, Plausible y PostHog. Para producción, activa `analyticsEnabled`, sustituye placeholders y carga solo el proveedor elegido con consentimiento de cookies si aplica.

## Comandos locales

```bash
npm ci
npm run build
npm run test:unit
npx playwright install chromium
npm run test:e2e
```
