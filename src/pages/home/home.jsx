import './home.scss';
import batken1 from '../../assets/images/batken-1.jpg';
import FadeInSection from "../../components/fade/Fade";
import CategoryCard from "../../components/categoryCard/CategoryCard.jsx";
import image1 from '../../assets/images/children-help.jpeg';
import image2 from '../../assets/images/old-help.jpg';
import image3 from '../../assets/images/poor-help.jpg';
import image4 from '../../assets/images/nature-help.jpg';
import {useTranslation} from "react-i18next";

export const Home = () => {
    const {t} = useTranslation();

    const categories = [
        {
            title: t("category.childTitle"),
            description: t("category.childDesc"),
            image: image1,
            link: '/'
        },
        {
            title: t("category.elderlyTitle"),
            description: t("category.elderlyDesc"),
            image: image2,
            link: '/'
        },
        {
            title: t("category.destituteTitle"),
            description: t("category.destituteDesc"),
            image: image3,
            link: '/'
        },
        {
            title: t("category.natureTitle"),
            description: t("category.natureDesc"),
            image: image4,
            link: '/'
        }]
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
                            <button onClick={() => navigate('/batken')}>
                                Смотреть
                            </button>
                            <button>
                                {t("doHelp")}
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