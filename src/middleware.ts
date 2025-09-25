import { defineMiddleware } from "astro/middleware";

const supportedLocales = ["es", "de"];

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Ya está en una ruta localizada, no hacemos nada
  if (pathname.startsWith("/es") || pathname.startsWith("/de")) {
    return next();
  }

  // Detectamos idioma del navegador
  const preferredLang = context.request.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0];

  if (preferredLang && supportedLocales.includes(preferredLang)) {
    return Response.redirect(`${url.origin}/${preferredLang}${pathname}`, 302);
  }

  // Si no hay preferencia o no es "es" ni "de", continuamos normal en "/"
  return next();
});
