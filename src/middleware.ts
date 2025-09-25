import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  if (pathname.startsWith("/es") || pathname.startsWith("/de")) {
    return next();
  }

  const acceptLanguage = context.request.headers.get("accept-language");
  const preferredLang = acceptLanguage?.split(",")[0].split("-")[0];

  if (preferredLang === "es" || preferredLang === "de") {
    return Response.redirect(`${url.origin}/${preferredLang}${pathname}`, 302);
  }

  return next();
});