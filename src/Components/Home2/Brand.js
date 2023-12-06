import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import brand1 from "../../Assets/img/brand/brand-3-1.png";
import brand2 from "../../Assets/img/brand/brand-3-2.png";
import brand3 from "../../Assets/img/brand/brand-3-3.png";
import brand4 from "../../Assets/img/brand/brand-3-4.png";
import brand5 from "../../Assets/img/brand/brand-3-5.png";
import brand6 from "../../Assets/img/brand/brand-3-6.png";

const Brand = () => {
  return (
    <div className="tp-brand-5__area tp-brand-5__bg">
      <div className="container-fluid gx-0">
        <Swiper
          direction="horizontal"
          slidesPerView={5}
          loop={true}
          spaceBetween={0}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            '1400': {
              slidesPerView: 5,
            },
            '1200': {
              slidesPerView: 4,
            },
            '992': {
              slidesPerView: 3,
            },
            '768': {
              slidesPerView: 3,
            },
            '576': {
              slidesPerView: 2,
            },
            '0': {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="tp-brand-5__item-box">
              <div className="tp-brand-5__item">
                <img
                  src={brand1}
                  alt="brand"
                  className="img-fluid"
                  width="171"
                  height="31"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tp-brand-5__item-box">
              <div className="tp-brand-5__item">
                <img
                  src={brand2}
                  alt="brand"
                  className="img-fluid"
                  width="128"
                  height="30"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tp-brand-5__item-box">
              <div className="tp-brand-5__item">
                <img
                  src={brand3}
                  alt="brand"
                  className="img-fluid"
                  width="154"
                  height="34"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tp-brand-5__item-box">
              <div className="tp-brand-5__item">
                <img
                  src={brand4}
                  alt="brand"
                  className="img-fluid"
                  width="200"
                  height="25"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tp-brand-5__item-box">
              <div className="tp-brand-5__item">
                <img
                  src={brand5}
                  alt="brand"
                  className="img-fluid"
                  width="163"
                  height="35"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tp-brand-5__item-box">
              <div className="tp-brand-5__item">
                <img
                  src={brand6}
                  alt="brand"
                  className="img-fluid"
                  width="200"
                  height="37"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tp-brand-5__item-box">
              <div className="tp-brand-5__item">
                <img
                  src={brand2}
                  alt="brand"
                  className="img-fluid"
                  width="128"
                  height="30"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tp-brand-5__item-box">
              <div className="tp-brand-5__item">
                <img
                  src={brand1}
                  alt="brand"
                  className="img-fluid"
                  width="171"
                  height="31"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Brand;