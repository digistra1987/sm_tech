'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type CapabilityTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  image: string;
};

type CapabilitesProps = {
  data: CapabilityTab[];
};

const CpCapabilites = ({ data }: CapabilitesProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeData = data[activeTab];

  return (
    <section className="cp-capabilities">
      <div className="container">

        {/* Tabs */}
        <div className="capabilities-tabs">
          <Swiper
            spaceBetween={16}
            slidesPerView={5}
            watchOverflow
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              768: {
                 slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {data.map((tab, index) => (
              <SwiperSlide key={tab.id}>
                <button
                  type="button"
                  className={`capability-tab ${activeTab === index ? 'active' : ''
                    }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Active Tab Content */}
        {activeData && (
          <div className="wrapper">
            <div className="content-wrap">
              <h3 className="title">{activeData.title}</h3>

              <p className="description">
                {activeData.description}
              </p>

              <ul className="list">
                {activeData.points.map((point, index) => (
                  <li className="item" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="image-wrap">
              <img
                src={activeData.image}
                alt={activeData.title}
              />
            </div>

            <span className="card-zigzag"></span>
          </div>
        )}

      </div>
    </section>
  );
};

export default CpCapabilites;