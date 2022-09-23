import './templateOurResults.scss'

const TemplateOurResults = ({}) => {
  return (
    <section className="template-results">
      <div className="container">
        <div className="template-results__inner">
          <p className="template-results__subtitle second-template__subtitle">
            OUR RESULTS
          </p>
          <h2 className="template-results__title second-template__title">
            Take a look at the big impact we have done
          </h2>
          <div className="template-results__content">
            <div className="template-results__content-item">
              <div>
                200<span>m</span>
              </div>
              <p>Humans impacted</p>
            </div>
            <div className="template-results__content-item">
              <div>
                50<span>k</span>
              </div>
              <p>Humans impacted</p>
            </div>
            <div className="template-results__content-item">
              <div>370<span>k</span></div>
              <p>Humans impacted</p>
            </div>
            <div className="template-results__content-item">
              <div>100<span>+</span></div>
              <p>Humans impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateOurResults;
