import { i18n } from '@lingui/core';

function detectLocale() {
  const supportedLocales = ['en', 'nb'];
  try {
    const htmlLocale = document.documentElement.lang;

    return supportedLocales.find(
      (locale) =>
        htmlLocale === locale || htmlLocale.toLowerCase().includes(locale),
    );
  } catch (_) {
    return 'en';
  }
}

export async function activateI18n(pkg) {
  const locale = detectLocale();
  const { messages } = await import(`../${pkg}/locales/${locale}/messages.mjs`);

  i18n.load(locale, messages);
  i18n.activate(locale);
}
