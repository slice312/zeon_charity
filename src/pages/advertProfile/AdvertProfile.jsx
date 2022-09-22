import React, {useState} from 'react';
import './advertProfile.scss'
import MainCarousel from "./carousel/mainCarousel/MainCarousel.jsx";
import SecondaryCarousel from "./carousel/secondaryCarousel/SecondaryCarousel.jsx";
import Charts from "./charts/Charts.jsx";
import Fade from "../../components/fade/Fade.jsx"
import Timer from "./timer/Timer.jsx";



const AdvertProfile = () => {

    const slides = [
        {
            image: 'https://www.mother.ly/wp-content/uploads/2018/08/preparing-for-childs-surgery-featured.jpeg'
        },
        {
            image: 'https://www.choa.org/-/media/Images/Childrens/global/content-blocks/parent-resources/surgery/how-to-prepare-your-child-for-surgery/boy-with-popsicle-after-surgery-921x481.jpg?la=en&hash=7A3227CFE86F4158B96EE5BBE256448E74ED0519'
        },
        {
            image: 'https://www.londonchildrensurgery.co.uk/dynamicdata/image/prepare-child-before-surgery.jpg'
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0)

    const [need, done] = [400, 600]

    return (
        <div className={'advertProfile'}>
            <div className={'container'}>
                <div className={'banner'}>
                    <div className={'banner-info'}>
                        <h2>
                            LIVE BID! 2 Lower Level Tickets to Adele in Vegas & 2 Nights at the ARIA Resort & Casino
                        </h2>
                        <div className={'advert-carousel'}>
                            <div className={'carousel-wrapper main'}>
                                <MainCarousel slides={slides} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                            </div>
                            <div className={'carousel-wrapper secondary'}>
                                <SecondaryCarousel slides={slides} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                            </div>
                        </div>
                    </div>
                    <Fade>
                        <div className={'banner-charts'}>
                            <Charts need={need} done={done}/>
                            <div className={'charts-description'}>
                                <h3 className={'charts-description__title'}>
                                    Необходимо собрать:
                                </h3>
                                <p className={'charts-description__content'}>
                                    {need+done}$
                                </p>
                                <h3 className={'charts-description__title'}>
                                    Уже собрано:
                                </h3>
                                <p className={'charts-description__content'}>
                                    {done}$
                                </p>
                                <h3 className={'charts-description__title'}>
                                    Осталось собрать:
                                </h3>
                                <p className={'charts-description__content'}>
                                    {need}$
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Timer/>
                </div>
            </div>
        </div>
    );
};

export default AdvertProfile;