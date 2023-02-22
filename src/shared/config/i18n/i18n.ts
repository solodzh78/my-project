import i18next from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import Languagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(I18NextHttpBackend)
  .use(Languagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18next;
