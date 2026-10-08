import { aboutUsData } from "./CpAboutUs_mockdata";

const CpAboutUs = () => {
  return (
    <section className="cp-about-us">
      <div className="container">
        <div className="wrapper">
          {/* Left Content */}
          <div className="lhs">
            <div className={`sec-head`}>
              {aboutUsData.tag && (
                <span
                  className="sec-tag wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.1s"
                >
                  {aboutUsData.tag}
                </span>
              )}

              {aboutUsData.title && (
                <h2
                  className="sec-title wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  {aboutUsData.title}{" "}
                  <span className="sec-titleBold">
                    {aboutUsData.secTitleBoldTxt}
                  </span>
                </h2>
              )}

              {aboutUsData.description && (
                <p
                  className="sec-desc wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  {aboutUsData.description}
                </p>
              )}
            </div>
            <div className="sec-cont">
              <ul className="highlight-list">
                {aboutUsData.highlights.map((item, index) => (
                  <li
                    className="highlight-item wow fadeInRight about-animate"
                    key={index}
                    style={{
                      transitionDelay: `${index * 0.15}s`,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Content */}
          <div className="rhs wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="30s">
            <div className="img-wrap">
              <img src={aboutUsData.backgroundImage} alt={aboutUsData.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CpAboutUs;
