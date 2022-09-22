import React, {useEffect} from 'react';
import {useSwiper} from "swiper/react";

// interface IProps {
//     setActiveIndex: any
//     activeIndex: number
//     slide: {
//         id: number
//         image: string
//     }
// }

const MainCarouselItem = ({slide, activeIndex}) => {
    const swiper = useSwiper()
    useEffect(() => {
        swiper.slideTo(activeIndex, 400)
    }, [activeIndex])
    return (
        <div className="item">
            <div className="item__content">
                <img src={slide.image} alt={'eda'}/>
            </div>
        </div>
    );
};

export default MainCarouselItem;