import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import line from "../../Assets/img/svg/InnerLine.svg";
import { Arrow } from '../../svg/svg';
import { serviceItems } from '../../Data/Data';

const Service = () => {
  return (
    <div className="tp-service__area mb-30">
      <div className="container-fluid mt-30">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service__wrapper">
              <Swiper
                direction="horizontal"
                slidesPerView={4}
                loop={true}
                spaceBetween={60}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  '1600': {
                    slidesPerView: 4,
                  },
                  '1400': {
                    slidesPerView: 3,
                  },
                  '1200': {
                    slidesPerView: 3,
                  },
                  '992': {
                    slidesPerView: 2,
                  },
                  '768': {
                    slidesPerView: 2,
                  },
                  '576': {
                    slidesPerView: 1,
                  },
                  '0': {
                    slidesPerView: 1,
                  },
                }}
                modules={[Autoplay]}
              >
                {serviceItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="tp-service__item fix p-relative">
                      <div className="tp-service__thumb">
                        <img src={item.imgSrc} alt={`service ${index + 1}`} width="405" height="495" className="img-fluid" />
                      </div>
                      <div className="tp-service__bottom-box">
                        <div className="tp-service__text d-flex align-items-center justify-content-between">
                          <h1 className="tp-service__title-sm">{item.title}</h1>
                          <span className="tp-service__arrow">
                            <Arrow />
                          </span>
                        </div>
                        <div className="tp-service__content">
                          <h1 className="tp-service__title p-relative">
                            <Link to={item.link}>
                              {item.title}
                              <span className="tp-title-shape">
                                <img src={line} alt="line" />
                              </span>
                            </Link>
                          </h1>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;