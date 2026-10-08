import { companyOverviewData } from './CpCompanyOverview_mockdata';

const CpCompanyOverview = () => {
  return (
    <section
      className="cp-company-overview"
      id="companyoverview"
    >
      <div className="container">
        <div className='wrapper'>
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
              <div className='content-wrap'>
                <h3 className="title">
                  {companyOverviewData.vision.title}
                </h3>
                <p className='description'>
                  {companyOverviewData.vision.description}
                </p>
              </div>

            </div>

            <div className="overview-card">
              <span className={`icon ${companyOverviewData.mission.icon}`}></span>
              <div className='content-wrap'>
                <h3 className="title">
                  {companyOverviewData.mission.title}
                </h3>

                <p className='description'>
                  {companyOverviewData.mission.description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CpCompanyOverview;