import React, {useState} from 'react';
import './advertProfile.scss'
import MainCarousel from "./carousel/mainCarousel/MainCarousel.jsx";
import SecondaryCarousel from "./carousel/secondaryCarousel/SecondaryCarousel.jsx";
import Charts from "./charts/Charts.jsx";
import Fade from "../../components/fade/Fade.jsx"
import Timer from "./timer/Timer.jsx";
import ShareElement from "./shareElement/ShareElement.jsx";



const AdvertProfile = () => {

    const slides = [
        {
            image: 'https://www.choa.org/-/media/Images/Childrens/global/content-blocks/parent-resources/surgery/how-to-prepare-your-child-for-surgery/boy-with-popsicle-after-surgery-921x481.jpg?la=en&hash=7A3227CFE86F4158B96EE5BBE256448E74ED0519'
        },
        {
            image: 'https://www.mother.ly/wp-content/uploads/2018/08/preparing-for-childs-surgery-featured.jpeg'
        },
        {
            image: 'https://www.londonchildrensurgery.co.uk/dynamicdata/image/prepare-child-before-surgery.jpg'
        },
        {
            image: 'https://www.mother.ly/wp-content/uploads/2018/08/preparing-for-childs-surgery-featured.jpeg'
        },
        {
            image: 'https://www.londonchildrensurgery.co.uk/dynamicdata/image/prepare-child-before-surgery.jpg'
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0)

    const [need, done] = [400, 600]

    return (
        <div className={'advertProfile'}>
            <div className={'container'}>
                <div className={'banner'}>
                    <div className={'banner-info'}>
                        <h2>
                            LIVE BID! 2 Lower Level Tickets to Adele in Vegas & 2 Nights at the ARIA Resort & Casino
                        </h2>
                        <div className={'advert-carousel'}>
                            <div className={'carousel-wrapper main'}>
                                <MainCarousel slides={slides} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                            </div>
                            <div className={'carousel-wrapper secondary'}>
                                <SecondaryCarousel slides={slides} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                            </div>
                        </div>
                    </div>
                    <div className={'banner-charts'}>
                            <Fade>
                                <Charts need={need} done={done}/>
                            </Fade>
                            <div className={'charts-description'}>
                                <Fade>
                                    <h3 className={'charts-description__title'}>
                                        Необходимо собрать:
                                    </h3>
                                    <p className={'charts-description__content'}>
                                        {need+done}$
                                    </p>
                                </Fade>
                                <Fade>
                                    <h3 className={'charts-description__title'}>
                                        Уже собрано:
                                    </h3>
                                    <p className={'charts-description__content'}>
                                        {done}$
                                    </p>
                                </Fade>
                                <Fade>
                                    <h3 className={'charts-description__title'}>
                                        Осталось собрать:
                                    </h3>
                                    <p className={'charts-description__content'}>
                                        {need}$
                                    </p>
                                </Fade>
                            </div>
                        </div>
                </div>
                <div className={'advert-description'}>
                    <h2>
                        Описание
                    </h2>
                    <Fade mode={'opacity'}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac
                        </p>
                    </Fade>
                </div>
                <ShareElement/>
            </div>
        </div>
    );
};

export default AdvertProfile;