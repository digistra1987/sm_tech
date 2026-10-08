'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type CpServicesProps = {
  data: Service[];
  button?: {
    label: string;
    href: string;
  };
};

const CpServices = ({ data, button }: CpServicesProps) => {
  return (
    <div className="container">
      <div className="cp-services">
        <div className="services-list">
          <Swiper className='bs-swiper typ-services'
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1.5}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {data.map((service) => (
              <SwiperSlide key={service.id}>
                <article className="service-card">
                  <span className="service-number">
                    {service.id}
                  </span>

                  <div className="service-content">
                    <span
                      className={`icon ${service.icon}`}
                    />
                    <h3 className="service-title">
                      {service.title}
                    </h3>
                    <p className="service-desc">
                      {service.description}
                    </p>
                  </div>
                  <span className="card-zigzag" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {button && (
          <div className="services-action">
            <Link
              href={button.href}
              className="btn-default btn-primary"
            >
              {button.label}
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default CpServices;