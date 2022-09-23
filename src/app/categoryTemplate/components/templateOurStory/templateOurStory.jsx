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
          Many people are used to thinking that the future is somewhere far away. These are dreams, plans, hopes for the
          best. We, our Lifeline Foundation, are shaping this future right now. Every day. What is our future like?
          First of all, these are children! Their health, their laughter, happy smiles and forward-looking eyes - after
          all, they will continue to change our world.
        </p>
      </div>
    </section>
  );
};

export default TemplateOurStory;
