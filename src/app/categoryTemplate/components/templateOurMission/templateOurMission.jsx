import './templateOurMission.scss'
import checkedIcon from "../../../../assets/icons/check.svg"
import signIcon from "../../../../assets/icons/founder-sign.svg"
import userIcon from "../../../../assets/images/template-user_avatar.jpg"

const TemplateOurMission = () => {
  return (
    <section className='template-mission'>
      <div className="template-mission__left">
        <p className="template-mission__subtitle second-template__subtitle">
          OUR MISSION
        </p>
        <h2 className="template-mission__title second-template__title">
          The mission we are working towards
        </h2>
        <p className="template-mission__text second-template__text">
          The future, technology, children. These three words are our everyday reality and concern. These three words are inspiration, both for us and for numerous partners and friends of the foundation, each of whom wants to contribute to our common tomorrow.
        </p>
        <button className="template-mission-btn template-preview__btn template-preview__btn--donate">
          Donate now
        </button>
      </div>
      <div className="template-window">
        <h3 className="template-window__title">
          Our mission is to eradicate hunger, poverty and war
        </h3>
        <p className="template-window__text second-template__text">
          Our mission is to inspire the support and implementation of the most incredible high—tech projects that can
          give the future and health to as many children as possible.
        </p>
        <ul className="template-window__list">
          <li className="template-window__item">
            <img src={checkedIcon} alt="#"/>
            <span>Excepteur sint occaecat cupidatat non proident</span>
          </li>
          <li className="template-window__item">
            <img src={checkedIcon} alt="#"/>
            <span>Pellentesque elit ullamcorper dignissim</span>
          </li>
        </ul>
        <div className="template-user">
          <div className="template-user__left">
            <div className="template-user__avatar">
              <img src={userIcon} alt=""/>
            </div>
            <div className="template-user__text-info">
              <p className="template-user__name">
                Sophie Moore
              </p>
              <div className="template-user__job">
                Founder
              </div>
            </div>
          </div>
          <div className="template-user__right">
            <img src={signIcon} alt="#"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateOurMission;
