import css from "./styles.module.scss";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import _ from "lodash";

import emptyImg from "src/assets/images/empty-card-image.png";


const MAX_DESCRIPTION_LENGTH = 128;

export const AdvertCard = ({advert}) => {
    const {t} = useTranslation();

    const dotCharIndex = advert.description.substring(0, MAX_DESCRIPTION_LENGTH)
        .lastIndexOf(".");
    const description = (dotCharIndex !== -1)
        ? advert.description.substring(0, dotCharIndex + 1)
        : advert.description;

    const progressPercent = Math.round(advert.progress / advert.target * 100);

    return (
        <div className={css.root}>
            <div className={css.imgWrap}>
                <img src={advert.images?.[0] || emptyImg} alt="img"/>
            </div>
            <div className={css.cityLabel}>
                <span>
                    Бишкек
                </span>
            </div>
            <div></div>
            <div className={css.info}>
                <h3 className={css.title}>
                    {advert.title}
                </h3>
                <p className={css.description}>
                    {description}
                </p>
                <div className={css.progress}>
                <span className={css.progressAmount}>
                    {advert.progress.toLocaleString("ru")} сом&nbsp;
                </span>
                    {t("from")} {advert.target.toLocaleString("ru")} сом
                    <div className={css.progressIndicator}>
                        <div className={css.progressIndicatorGray}></div>
                        <div className={css.progressIndicatorStatus}
                             style={{width: `${progressPercent}%`}}
                        >
                        </div>

                    </div>
                </div>
                <Link to={`/advert/${advert.id}`} className={css.btnHelp}>
                    {t("doHelp")}
                </Link>
            </div>
        </div>
    );
};