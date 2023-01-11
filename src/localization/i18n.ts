import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './en/translation.json';

/**
 * Defines the resources for each language.
 */
export const resources = {
  en: {
    translation: translationEN,
  },
};

/**
 * Init i18n, currently supports only english.
 */
i18n.use(initReactI18next).init({
  //Fallback to legacy option, pluralization not needed
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
