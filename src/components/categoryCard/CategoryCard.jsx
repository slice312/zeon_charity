import React from 'react';
import './categoryCard.scss'
import FadeInSection from "../fade/Fade";
import {useNavigate} from "react-router-dom"

const CategoryCard = ({title, description, image, link}) => {
    const navigate = useNavigate()
    return (
        <div className={'categoryCard'}>
            <FadeInSection>
                <div className={'category-image'}>
                    <img src={image} alt={'help'}/>
                </div>
                <div className={'category-content'}>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                    <button onClick={() => navigate(link)}>
                        Подробнее
                    </button>
                </div>
            </FadeInSection>
        </div>
    );
};

export default CategoryCard;