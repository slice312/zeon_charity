import React, {useEffect} from 'react';
import {useSwiper} from "swiper/react";

// interface IProps {
//     setActiveIndex: any
//     activeIndex: number
//     index: number
//     slide: {
//         id: number
//         image: string
//     }
// }


const SecondaryCarouselItem = ({setActiveIndex, activeIndex, index, slide}) => {
    const swiper = useSwiper()
    useEffect(() => {
        swiper.slideTo(activeIndex, 400)
    }, [activeIndex])
    return (
        <div className="item"
             onClick={() => setActiveIndex(index)}>
            <img src={slide.image} alt={'eda'}/>
        </div>
    );
};

export default SecondaryCarouselItem;