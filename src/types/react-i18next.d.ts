import {resources} from '@localization/i18n';

/**
 * Type for translation key validation.
 * Currently only en resources.
 */
declare module 'react-i18next' {
  type CustomTypeOptions = {
    resources: typeof resources['en'];
  };
}
