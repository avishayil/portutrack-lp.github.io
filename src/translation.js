import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from 'react-i18next'

import translationEn from "./locales/en/translation.json";
import translationHe from "./locales/he/translation.json";
import translationPtBr from "./locales/pt-BR/translation.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage', 'cookie']
        },
        resources: {
          en: {
            translations: translationEn,
          },
          he: {
            translations: translationHe,
          },
          'pt-BR': {
            translations: translationPtBr,
          },
        },
        /* When react i18next not finding any language to as default in borwser */
        fallbackLng: "en",
        /* debugger For Development environment */
        debug: false,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: ".",
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    })

export default i18n;