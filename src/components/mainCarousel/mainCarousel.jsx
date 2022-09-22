import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import './carousel.scss';
import 'swiper/css/autoplay';
import {useId} from "react";

const MainCarousel = () => {
    const slides =
        {
            link: '/advert1',
            content: <>
                <img src="https://imgs.search.brave.com/zIq_OcXTU0NRVzLc0SfenRed5C0rXCQCK24LBjAqx5c/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/UEdhQTdTOWlyY0t0/c3puWDJtVjJBSGFF/SyZwaWQ9QXBp" alt="image"/>
                <div>
                    <h3>Нужны валантеры</h3>
                    <p>Нужны валантеры от 18 лет для помощи сборов, упаковки, отправки продуктов в Баткен </p>
                </div>
            </>
        }

    console.log(slides)
    const uniqId = useId();
    return (
        <section className="mySwiper">
                <div className="slide__container" key={`${uniqId}__carousel`}>
                    {slides.content}
                </div>

        </section>
    );
};

export default MainCarousel;