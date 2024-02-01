import { en, kr } from "./translations";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: en
    },
    kr: {
        translation: kr
    }
}

i18next.use(initReactI18next).init({
    debug: true,
    lng: 'en',
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: resources
});

export default i18next;