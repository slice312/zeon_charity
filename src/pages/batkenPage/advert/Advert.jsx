import React from 'react';
import './advert.scss'
import FadeInSection from "../../../components/fade/Fade";

const Advert = ({tel, text, date}) => {
    return (
        <FadeInSection>
        <div className={'advert'}>
            <div className={'advert-content'}>
                <p>{text}</p>
                <div className={'advert-tel'}>
                    Телефон: <a href={`tel: ${tel}`}>{'+996995123130'}</a>
                </div>
            </div>
            <div className={'advert-date'}>
                {date}
            </div>
        </div>
        </FadeInSection>
    );
};

export default Advert;