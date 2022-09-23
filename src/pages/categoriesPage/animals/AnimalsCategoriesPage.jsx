import React from 'react';
import "./animals.scss"

const AnimalsCategoriesPage = () => {
    return (
        <section className="animals__categories">
            <div className="animals__categories__container">
                <div className="preview">
                    <div className="preview__text-box">
                        <div className="head-line-top"> </div>
                        <h3 className="preview__title">
                            Giving help to those who need it</h3>
                        <p className="preview__subtitle">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                            sit phasellus mollis sit aliquam sit nullam.</p>
                        <div className="second-col__btn">
                            <button>Donate now</button>
                            <button>About our charity</button>
                        </div>
                    </div>
                    <div  className="preview__img">
                    <img src="https://assets.website-files.com/6203d9f91bd3214ea54a1eba/620409c92ec6397ba96bbf0a_home-hero-image-charity-webflow-ecommerce-template-p-800.jpeg"
                         alt="pets image"/>
                </div>
                </div>
            </div>
                <div className="help__info-bg">
                    <div className="animals__categories__container">
                       <div className="help__info">
                           <div className="help_item">
                               <h3>200<span>m</span></h3>
                               <p>Humans impacted</p>
                           </div>
                           <div className="help_item">
                               <h3>50<span>k</span></h3>
                               <p>Collaborators</p>
                           </div>
                           <div className="help_item">
                               <h3>370<span>k</span></h3>
                               <p>Donations</p>
                           </div>
                           <div className="help_item">
                               <h3>100<span>+</span></h3>
                               <p>Assisted communities</p>
                           </div>
                       </div>
                    </div>

                <div className="animals__categories__container">
                    <div className="about-us">
                        <div className="grid-row">
                            <div className="first-col">
                                <div className="first-col__content-box">
                                    <div className="about-us__title">ABOUT US</div>
                                    <h3 className="about-us__subtitle">We are here to support vulnerable communities</h3>
                                    <p className="about-us__text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                        do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua molestie a iaculis at erat pellentesque adipiscing
                                        commodo
                                        elit at.</p>
                                </div>
                                <div className="first-col__img-box">
                                    <img
                                        src="https://assets.website-files.com/6203d9f91bd3214ea54a1eba/62041b7f6b64ea20b6de7066_about-us-image-1-charity-webflow-ecommerce-template.jpg"
                                        alt=""/>
                                    <img
                                        src="https://assets.website-files.com/6203d9f91bd3214ea54a1eba/62041b7f91e9d12616717c46_about-us-image-2-charity-webflow-ecommerce-template.jpg"
                                        alt=""/>
                                </div>
                            </div>
                            <div className="second-col">
                                <div className="second-col__btn">
                                    <button>Donate now</button>
                                    <button>About us</button>
                                </div>
                                <div className="second-col__content">
                                    <img className="second-col__content__img"
                                         src="https://assets.website-files.com/6203d9f91bd3214ea54a1eba/62041b7f20dcc772aad073a5_about-us-image-3-charity-webflow-ecommerce-template.jpg"
                                         alt=""/>
                                    <p className="second-col__content__text">
                                        Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et netus et malesuada
                                        fames urna nec tincidunt praesent semper feugiat metus aliquam eleifend mi in nulla
                                        posuere sollicitudin pretium aenean pharetra magna ac placerat.
                                    </p>
                                    <div className="second-col-li">
                                        <img
                                            src="https://assets.website-files.com/6203d9f91bd3214ea54a1eba/62044ce0f472ee99e82c6d6f_checkmark-icon-charity-webflow-ecommerce-template.svg"
                                            alt=""/>
                                        <p>Excepteur sint occaecat cupidatat non proident</p>
                                    </div>
                                    <div className="second-col-li">
                                        <img
                                            src="https://assets.website-files.com/6203d9f91bd3214ea54a1eba/62044ce0f472ee99e82c6d6f_checkmark-icon-charity-webflow-ecommerce-template.svg"
                                            alt=""/>
                                        <p>Pellentesque elit ullamcorper dignissim</p>
                                    </div>
                                    <div className="second-col-li">
                                        <img
                                            src="https://assets.website-files.com/6203d9f91bd3214ea54a1eba/62044ce0f472ee99e82c6d6f_checkmark-icon-charity-webflow-ecommerce-template.svg"
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