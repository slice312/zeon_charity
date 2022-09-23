import React from 'react';
import "./animals.scss"

const AnimalsCategoriesPage = ({data}) => {

    return (
        <section className="animals__categories">
            <div className="animals__categories__container">
                <div className="preview">
                    <div className="preview__text-box">
                        <div className="head-line-top">

                        </div>
                        <h3 className="preview__title">
                            {data.title} </h3>
                        <p className="preview__subtitle">{data.description}</p>
                        <div className="second-col__btn">
                            <button>Помочь сейчас</button>
                            <button>Онашем фонде</button>
                        </div>
                    </div>
                    <div className="preview__img">
                        <img
                            src={data.preview__img}
                            alt="pets image"/>
                    </div>
                </div>
            </div>
            <div className="help__info-bg">
                <div className="animals__categories__container">
                    <div className="help__info">
                        <div className="help_item">
                            <h3>200<span>m</span></h3>
                            <p>Помощь людей</p>
                        </div>
                        <div className="help_item">
                            <h3>50<span>k</span></h3>
                            <p>Коллобараторы</p>
                        </div>
                        <div className="help_item">
                            <h3>370<span>k</span></h3>
                            <p>Пожертвования</p>
                        </div>
                        <div className="help_item">
                            <h3>100<span>+</span></h3>
                            <p>Поддерживаемые сообщества</p>
                        </div>
                    </div>
                </div>

                <div className="animals__categories__container">
                    <div className="about-us">
                        <div className="grid-row">
                            <div className="first-col">
                                <div className="first-col__content-box">
                                    <div className="about-us__title">ABOUT US</div>
                                    <h3 className="about-us__subtitle">{data.about__us__title}</h3>
                                    <p className="about-us__text">{data.about__us__description}</p>
                                </div>
                                <div className="first-col__img-box">
                                    <img
                                        src={data.first__img}
                                        alt=""/>
                                    <img
                                        src={data.second__img}
                                        alt=""/>
                                </div>
                            </div>
                            <div className="second-col">
                                <div className="second-col__btn">
                                    <button>Помочь сейчас</button>
                                    <button>О нас</button>
                                </div>
                                <div className="second-col__content">
                                    <img className="second-col__content__img"
                                         src={data.third__img}
                                         alt=""/>
                                    <p className="second-col__content__text">
                                        {data.about__us__text}
                                    </p>
                                    <div className="second-col-li">
                                        <img
                                            src="https://cdn1.iconfinder.com/data/icons/go-round-basic/24/Check-128.png"
                                            alt=""/>
                                        <p>Excepteur sint occaecat cupidatat non proident</p>
                                    </div>
                                    <div className="second-col-li">
                                        <img
                                            src="https://cdn1.iconfinder.com/data/icons/go-round-basic/24/Check-128.png"
                                            alt=""/>
                                        <p>Pellentesque elit ullamcorper dignissim</p>
                                    </div>
                                    <div className="second-col-li">
                                        <img
                                            src="https://cdn1.iconfinder.com/data/icons/go-round-basic/24/Check-128.png"
                                            alt=""/>
                                        <p>Nibh mauris cursus mattis molestie a iaculis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AnimalsCategoriesPage;