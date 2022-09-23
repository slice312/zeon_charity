import './home.scss';
import batken1 from '../../assets/images/batken-1.jpg';
import FadeInSection from "../../components/fade/Fade";
import CategoryCard from "../../components/categoryCard/CategoryCard.jsx";
import image1 from '../../assets/images/children-help.jpeg';
import image2 from '../../assets/images/old-help.jpg';
import image3 from '../../assets/images/poor-help.jpg';
import image4 from '../../assets/images/nature-help.jpg';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const {t} = useTranslation();
    const navigate = useNavigate()

    const categories = [
        {
            title: t("category.childTitle"),
            description: t("category.childDesc"),
            image: image1,
            link: '/animals/1'
        },
        {
            title: t("category.elderlyTitle"),
            description: t("category.elderlyDesc"),
            image: image2,
            link: '/elderly/2'
        },
        {
            title: t("category.natureTitle"),
            description: t("category.natureDesc"),
            image: "https://imgs.search.brave.com/HpZeI4yTp7p4r2Jz3uiWBV2xO-41ASsCrfzfjvAAkGo/rs:fit:1200:880:1/g:ce/aHR0cHM6Ly9sZXNz/LWhvbWVsZXNzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wOC8lRDAlOUEl/RDAlQkUlRDAlQkYl/RDAlQjglRDElOEYt/MDE3LTEzMjB4ODgw/LmpwZw",
            link: '/nature/4'
        },
        {
            title: t("category.batken"),
            description: t("category.batkenDesc"),
            image: "https://sputnik.kg/img/07e6/09/15/1068126940_0:240:1280:960_1920x0_80_0_0_e44389f2d81b4f6bc8d34e6f05756db2.jpg.webp",
            link: '/batken/5'
        },
    ];
    return (
        <div className={'home'}>
            <div className="container">
                <section className={'help-banner'}>
                    <div className="banner-text">
                        <FadeInSection>
                            <h1>
                                {t("batkenHelp")}
                            </h1>
                            <p>
                                {t("batkenHelpDesc")}
                            </p>
                            <button onClick={() => navigate('/batken/5')}>
                                Смотреть
                            </button>
                            <button>
                                <a href="tel:+996777888266">
                                    {t("doHelp")}
                                </a>
                            </button>
                        </FadeInSection>
                    </div>
                    <img src={batken1} alt={'batken'} className={'banner-image'}/>
                </section>
                <section className={'categories-section'}>
                    <h1>
                        {t("ourProjects")}
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
    );
};