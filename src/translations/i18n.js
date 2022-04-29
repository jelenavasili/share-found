import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { translations_en } from "./en/translations_en";
import { translations_sr } from "./sr/translations_sr";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      sr: {
        translation: translations_sr,
        // here we will place our translations...
      },
      en: {
        translation: translations_en,
      },
    },
  });

i18n.changeLanguage("sr");
export default i18n;
