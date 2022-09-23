import "./templateOurStory.scss"
import image from "../../../../assets/images/template-story.jpeg"

const TemplateOurStory = () => {
  return (
    <section className="template-story">
      <div className="template-story__img-block">
        <img src={image} alt="#"/>
      </div>
      <div className="template-story__content ">
        <p className="template-story__subtitle second-template__subtitle">
          OUR STORY
        </p>
        <h2 className="template-story__title second-template__title">
          Why did we start this foundation?
        </h2>
        <p className="template-story__text template-story__text--first second-template__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
          viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem alique.
        </p>
        <p className="template-story__text section-template__text second-template__text">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default TemplateOurStory;
