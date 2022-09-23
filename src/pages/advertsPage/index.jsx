import css from "./styles.module.scss";
import cn from "classnames"

import {useTranslation} from "react-i18next";
import {AdvertCard} from "src/components/advertCard";
import {CardsContainer} from "src/shared/ui/cardsContainer";
import {CountdownTimer} from "src/components/countdownTimer";

import {Data} from "src/assets/mock/data.js";
import {advertApi} from "../../store/advertApi.js";
import {useParams} from "react-router-dom";



export const AdvertsPage = () => {
    const params = useParams()

    const {data: adverts} = advertApi.useGetAdvertsQuery({categoryId: params.id});

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