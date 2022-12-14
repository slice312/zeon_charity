import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import './MainCarousel.scss'
import {CloseModalButton, NextButton, OpenModalButton, PrevButton} from "../carouselButtons/CarouselButtons.jsx";
import MainCarouselItem from "./MainCarouselItem.jsx";


//ToDo change SwiperSlide key from slide to slide.id

const MainCarousel = ({slides, activeIndex, setActiveIndex}) => {
    const [modalOpened, setModalOpened] = useState(false)

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const [width, setWidth] = useState(window.innerWidth);

    const isMobile = width <= 575;

    useEffect(() => {
        document.body.style.overflow = modalOpened ? 'hidden': 'visible'
    }, [modalOpened])
    return (
        <div className={`mainCarousel ${modalOpened ? 'opened' : ''}`}>
            {activeIndex !== 0 &&
                <PrevButton setActiveIndex={setActiveIndex}
                            activeIndex={activeIndex}
                            modalOpened={modalOpened}/>}
            {activeIndex + 1 !== slides.length &&
                <NextButton setActiveIndex={setActiveIndex}
                            activeIndex={activeIndex}
                            modalOpened={modalOpened}/>}
            {modalOpened &&
                <CloseModalButton closeModal={() => setModalOpened(false)}/>}
            <Swiper
                spaceBetween={modalOpened? 0 : 8}
                slidesPerView={(modalOpened ? 1 : (isMobile ? 1.1 : 1))}
                keyboard
                onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
            >
                {slides.map((slide, index) =>
                    <SwiperSlide key={index}>
                        <MainCarouselItem slide={slide}
                                          setOpened={setModalOpened}
                                          setActiveIndex={setActiveIndex}
                                          activeIndex={activeIndex}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default MainCarousel;