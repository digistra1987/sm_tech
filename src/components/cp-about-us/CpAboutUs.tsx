import { aboutUsData } from './CpAboutUs_mockdata';

const CpAboutUs = () => {
  return (
    <section className="cp-about-us">
      <div className="container">

        <div className="wrapper">

          {/* Left Content */}
          <div className="lhs">
            <div
              className={`sec-head`}
            >
              {aboutUsData.tag && <span className={"sec-tag"}>{aboutUsData.tag}</span>}
              {aboutUsData.title && <h2 className={"sec-title"}>
                {aboutUsData.title} <span className={"sec-titleBold"}>{aboutUsData.secTitleBoldTxt}</span>
              </h2>
              }
              {aboutUsData.description && <p className="sec-desc">{aboutUsData.description}</p>}
            </div>
            <div className={`sec-cont`}>
              <ul className='highlight-list'>
                {aboutUsData.highlights.map((item, index) => (
                  <li
                    className="highlight-item"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Content */}
          <div className="rhs">
            <div className='img-wrap'>
              <img src={aboutUsData.backgroundImage} alt={aboutUsData.title} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CpAboutUs;