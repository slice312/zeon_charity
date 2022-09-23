import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import ruDictionary from "src/assets/i18n/ru.json";
import enDictionary from "src/assets/i18n/en.json";


export default i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: "RU",
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            "RU": {translation: ruDictionary},
            "EN": {translation: enDictionary}
        },
        compatibilityJSON: "v3",
        interpolation: {
            escapeValue: false
        }
    });


