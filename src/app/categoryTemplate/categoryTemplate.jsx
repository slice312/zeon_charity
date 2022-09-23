import TemplatePreview from "./components/templatePreview/templatePreview";
import "./categoryTemplate.scss"
import TemplateOurResults from "./components/templateOurResults/templateOurResults";
import TemplateOurStory from "./components/templateOurStory/templateOurStory";
import TemplateOurMission from "./components/templateOurMission/templateOurMission";

const CategoryTemplate = () => {
  return (

    <div className="second-template">
      <div className="second-template__inner">
        <TemplatePreview/>
        <TemplateOurResults/>
        <div className="second-template__section">
          <div className="container">
            <TemplateOurStory/>
            <TemplateOurMission/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTemplate;
