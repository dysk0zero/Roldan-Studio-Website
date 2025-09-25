import { defineMiddleware } from "astro/middleware";

const supportedLocales = ["en", "es", "de"];
const defaultLocale = "en";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // Si ya está en una ruta de idioma, no redirige
  const pathname = url.pathname;
  if (supportedLocales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return next(); // Continúa la solicitud normal
  }

  // Detectar idioma preferido
  const preferredLang = context.request.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0];

  const locale = supportedLocales.includes(preferredLang ?? "")
    ? preferredLang
    : defaultLocale;

  // Redireccionar
  return Response.redirect(`${url.origin}/${locale}`, 302);
});
