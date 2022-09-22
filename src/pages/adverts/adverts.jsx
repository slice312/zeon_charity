import css from "./styles.module.scss";

import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

export const Adverts = () => {
    const {t, i18n} = useTranslation();

    const [locale, setLocale] = useState(i18n.language);

    useEffect(() => {
        i18n.changeLanguage(locale)
            .then(() => console.log(`Localization changed to ${locale}`));
    }, [locale]);

    return (
        <div className={css.root}>
            ss22
            Home Page


            <button  type={"button"} onClick={() => {
                setLocale(locale === "EN" ? "RU" : "EN")
            }} >
                {t("doHelp")}
            </button>
        </div>
    );
};