import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';
import numeral from 'numeral';

import 'moment/locale/ko';

import * as en from '../locales/en';
import * as ko from '../locales/ko';

const additionalLanguages = ['en'];

i18n.on('languageChanged', (language) => {
  const twoLetterCode = language && language.split('-')[0];
  const hasLanguage = additionalLanguages.includes(twoLetterCode);

  moment.locale(language);

  if (!hasLanguage) {
    return;
  }

  import(`../locales/${twoLetterCode}`).then(locales => {
    Object.keys(locales).forEach(locale => {
      i18n.addResources(twoLetterCode, locale, locales[locale]);
    });
  });
});

i18n.use(LanguageDetector).init({
  resources: { ko },
  fallbackLng: 'ko',
  load: 'languageOnly',
  lowerCaseLng: true,
  interpolation: {
    escapeValue: false,
    format: (value, format) => {
      if (format === 'lowercase') {
        return value.toLowerCase();
      }
      if (format === 'uppercase') {
        return value.toUpperCase();
      }
      if (format === 'numeric') {
        return numeral(value).format();
      }
      return value;
    },
  },
});

export default i18n;
