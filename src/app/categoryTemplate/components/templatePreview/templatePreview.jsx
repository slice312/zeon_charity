import previewFirstImage from "../../../../assets/images/template-preview_1.jpeg";
import previewSecontImage from "../../../../assets/images/template-preview_2.jpeg";
import './templatePreview.scss'


const TemplatePreview = () => {
  return (
    <section className="template-preview">
      <div className="container">

        <div className="template-preview__head">
          <h2 className="template-preview__title">
            The mission behind our charity foundation
          </h2>
          <div className="template-preview__buttons">
            <button className="template-preview__btn template-preview__btn--donate">
              Donate now
            </button>
            <button className="template-preview__btn template-preview__btn--help">
              How can I help
            </button>
          </div>
        </div>
        <div className="template-preview__galery">
          <div className="template-preview__image-block template-preview__image-block--big">
            <img src={previewFirstImage} alt="#"/>
          </div>
          <div className="template-preview__image-block template-preview__image-block--small">
            <img src={previewSecontImage} alt="#"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatePreview;
