import TemplatePreview from "./components/templatePreview/templatePreview";
import "./categoryTemplate.scss"
import TemplateOurResults from "./components/templateOurResults/templateOurResults";
import TemplateOurStory from "./components/templateOurStory/templateOurStory";
import TemplateOurMission from "./components/templateOurMission/templateOurMission";
import {useParams} from "react-router-dom";
import {advertApi} from "../../store/advertApi.js";
import {CardsContainer} from "../../shared/ui/cardsContainer/index.jsx";
import {AdvertCard} from "../../components/advertCard/index.jsx";

const CategoryTemplate = () => {

  const params = useParams()

  const {data: adverts} = advertApi.useGetAdvertsQuery({categoryId: undefined});

  return (

    <div className="second-template">
      <div className="second-template__inner">
        <TemplatePreview/>
        <TemplateOurResults/>
        <div className="second-template__section">
          <div className="container">
            <TemplateOurStory/>
            <TemplateOurMission/>
            <div style={{marginTop: 50}}></div>
            <CardsContainer>
              {
                adverts?.map(advert =>
                    <AdvertCard key={advert.id} advert={advert}/>)
              }
            </CardsContainer>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CategoryTemplate;
