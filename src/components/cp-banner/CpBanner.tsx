import { bannerData } from "./CpBanner_mockdata";

const CpBanner = () => {
  return (
    <section
      className="cp-banner"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(6, 36, 111, 0.95) 0%,
          rgba(6, 49, 143, 0.80) 45%,
          rgba(6, 72, 181, 0.60) 75%,
          rgba(7, 85, 199, 0.45) 100%
        ), url("${bannerData.backgroundImage}")`,
      }}
    >
      <div className="container">
        <div className="banner-wrap">

          <h2
            className="banner-title wow fadeInUp " data-wow-duration="5s" data-wow-delay="10s"
          >
            {bannerData.title}
            <span className="bold">
              {bannerData.titleBold}
            </span>
          </h2>

          <p
            className="banner-desc wow fadeInUp"
            data-wow-delay="10s"
            data-wow-duration="20s"
          >
            {bannerData.description}
          </p>

          <div
            className="act-wrap wow fadeInUp"
            data-wow-delay="12s"
            data-wow-duration="25s"
          >
            <button
              className="btn-default"
              onClick={() => {
                window.location.href = "#services";
              }}
            >
              All Services <span className="arrow">&rarr;</span>
            </button>

            <button
              className="btn-default btn-primary"
              onClick={() => {
                window.location.href = "#services";
              }}
            >
              Contact Us <span className="arrow">&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CpBanner;