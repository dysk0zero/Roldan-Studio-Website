import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LOCALES = ['es', 'de'];

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  const acceptLang = context.request.headers.get("accept-language") ?? "";
  const preferred = acceptLang.split(",")[0].split("-")[0];

  if (SUPPORTED_LOCALES.includes(preferred)) {
    return context.redirect(`/${preferred}/`);
  }

  return next();
});
