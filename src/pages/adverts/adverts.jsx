import css from "./styles.module.scss";
import cn from "classnames"

import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {AdvertCard} from "src/components/advertCard";
import {CardsContainer} from "src/shared/ui/cardsContainer";

import {Data} from "src/assets/mock/data.js";



export const Adverts = () => {
    const {t} = useTranslation();

    return (
        <div className={cn("container", css.root)}>
            <CardsContainer>
                {
                    Data.adverts.map(advert =>
                        <AdvertCard key={advert.id} advert={advert}/>)
                }
            </CardsContainer>
        </div>
    );
};