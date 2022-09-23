
//import css from "./styles.module.scss"
import './home.scss'
import MainCarousel from "../../components/mainCarousel/mainCarousel.jsx"
import batken1 from '../../assets/images/batken-1.jpg'
import FadeInSection from "../../components/fade/Fade";
import CategoryCard from "../../components/categoryCard/CategoryCard.jsx";
import image1 from '../../assets/images/children-help.jpeg'
import image2 from '../../assets/images/old-help.jpg'
import image3 from '../../assets/images/poor-help.jpg'
import image4 from '../../assets/images/nature-help.jpg'

export const Home = () => {
    const categories = [
        {
            title: 'Помощь детям',
            description: 'Природу не поставишь “на паузу”. Природоохранная работа — это сложный, непрерывный и очень долгий процесс. Его нельзя останавливать, чтобы не “откатиться” на несколько десятилетий назад. Здоровая экосистема — это залог нашего существования, и сохранять природу жизненно важно для нас и будущих поколений.',
            image: image1,
            link: '/'
        },
        {
            title: 'Помощь пожилым',
            description: 'Природу не поставишь “на паузу”. Природоохранная работа — это сложный, непрерывный и очень долгий процесс. Его нельзя останавливать, чтобы не “откатиться” на несколько десятилетий назад. Здоровая экосистема — это залог нашего существования, и сохранять природу жизненно важно для нас и будущих поколений.',
            image: image2,
            link: '/'
        },
        {
            title: 'Помощь нуждающимся',
            description: 'Природу не поставишь “на паузу”. Природоохранная работа — это сложный, непрерывный и очень долгий процесс. Его нельзя останавливать, чтобы не “откатиться” на несколько десятилетий назад. Здоровая экосистема — это залог нашего существования, и сохранять природу жизненно важно для нас и будущих поколений.',
            image: image3,
            link: '/'
        },
        {
            title: 'Помощь природе',
            description: 'Природу не поставишь “на паузу”. Природоохранная работа — это сложный, непрерывный и очень долгий процесс. Его нельзя останавливать, чтобы не “откатиться” на несколько десятилетий назад. Здоровая экосистема — это залог нашего существования, и сохранять природу жизненно важно для нас и будущих поколений.',
            image: image4,
            link: '/'
        }
    ]
    return (
        // <div className={css.carousel__container}>
        //     <MainCarousel/>
        // </div>
        <div className={'home'}>
            <div className="container">
                <section className={'help-banner'}>
                    <div className="banner-text">
                        <FadeInSection>
                            <h1>
                                Помощь Баткену
                            </h1>
                            <p>
                                Объявлен сбор средств для оказания помощи Баткену
                            </p>
                            <button>
                                Помочь
                            </button>
                        </FadeInSection>
                    </div>
                    <img src={batken1} alt={'batken'} className={'banner-image'}/>
                </section>
                <section className={'categories-section'}>
                    <h1>
                        Наши проекты
                    </h1>
                    <div className={'categories-content'}>
                        {categories.map((item, index) =>
                            <div className={'category-item'} key={index}>
                            <CategoryCard {...item}/>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}