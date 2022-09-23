import css from "./styles.module.scss";
import cn from "classnames"

import {useTranslation} from "react-i18next";
import {AdvertCard} from "src/components/advertCard";
import {CardsContainer} from "src/shared/ui/cardsContainer";
import {CountdownTimer} from "src/components/countdownTimer";

import {Data} from "src/assets/mock/data.js";
import {advertApi} from "../../store/advertApi.js";



export const AdvertsPage = () => {
    const {data: adverts} = advertApi.useGetAdvertsQuery();

    return (
        <div className={cn("container", css.root)}>
            <CardsContainer>
                {
                    adverts?.map(advert =>
                        <AdvertCard key={advert.id} advert={advert}/>)
                }
            </CardsContainer>
        </div>
    );
};