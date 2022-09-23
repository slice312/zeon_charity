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

const MainCarouselItem = ({slide, activeIndex, setOpened}) => {
    const swiper = useSwiper()
    useEffect(() => {
        swiper.slideTo(activeIndex, 400)
    }, [activeIndex])
    return (
        <div className="item">
            <div className="item__content"
                 onClick={() => {
                     setOpened(false)
                 }}>
                <img src={slide.image}
                     alt={'eda'}
                     onClick={(e) => {
                         e.stopPropagation()
                         setOpened(true)
                     }}/>
            </div>
        </div>
    );
};

export default MainCarouselItem;