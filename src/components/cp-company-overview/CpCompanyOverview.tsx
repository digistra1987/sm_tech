import { companyOverviewData } from './CpCompanyOverview_mockdata';

const CpCompanyOverview = () => {
  return (
    <section
      className="cp-company-overview"
      id="companyoverview"
    >
      <div className="container">
        <div className='content-wrap'>
          <div
            className={`sec-head`}
          >
            <div className='lhs'>
              {companyOverviewData.tag && <span className={"sec-tag"}>{companyOverviewData.tag}</span>}
              {companyOverviewData.title && <h2 className={"sec-title"}>
                {companyOverviewData.secTitleBoldTxt} <span className={"sec-titleBold"}>{companyOverviewData.secTitleBoldTxt}</span>
              </h2>
              }
            </div>
            <div className='rhs'>
              {companyOverviewData.description && <p className="sec-desc">{companyOverviewData.description}</p>}
            </div>
          </div>
          {/* Vision & Mission */}
          <div className="overview-card-grid">

            <div className="overview-card">
              <span className={`icon ${companyOverviewData.vision.icon}`}>

              </span>

              <h3>
                {companyOverviewData.vision.title}
              </h3>

              <p>
                {companyOverviewData.vision.description}
              </p>
            </div>

            <div className="overview-card-card">
              <span className={`icon ${companyOverviewData.mission.icon}`}></span>

              <h3>
                {companyOverviewData.mission.title}
              </h3>

              <p>
                {companyOverviewData.mission.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CpCompanyOverview;