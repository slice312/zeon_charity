import React from 'react';
import './SecondaryCarousel.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import SecondaryCarouselItem from "./SecondaryCarouselItem.jsx";

// interface IProps {
//     slides: {id: number, image: string}[]
//     activeIndex: number
//     setActiveIndex: any
// }

//ToDo change SwiperSlide key from slide to slide.id

const SecondaryCarousel = ({slides, activeIndex, setActiveIndex}) => {
    return (
        slides.length > 1 ?
        <Swiper
            className={'secondaryCarousel'}
            spaceBetween={2}
            slidesPerView={3}
            direction={'vertical'}
        >
            {slides.map((slide, index) =>
                <SwiperSlide key={'secondary' + index}>
                    <SecondaryCarouselItem slide={slide}
                                           setActiveIndex={setActiveIndex}
                                           activeIndex={activeIndex}
                                           index={index}/>
                </SwiperSlide>
            )}
        </Swiper> : <></>
    );
};

export default SecondaryCarousel;