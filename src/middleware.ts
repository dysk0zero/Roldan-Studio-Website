// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  if (pathname === '/') {
    const acceptLanguage = context.request.headers.get('accept-language');
    if (acceptLanguage) {
      const lang = acceptLanguage.split(',')[0].split('-')[0];
      const supported = ['es', 'de'];
      if (supported.includes(lang)) {
        return context.redirect(`/${lang}/`);
      }
    }
  }

  return next();
});
