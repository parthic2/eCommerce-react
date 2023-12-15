import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import { brandImages } from '../../Data/Data';

const Brand = () => {
  return (
    <section className="tp-brand-5__area tp-brand-5__bg">
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
          {brandImages.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="tp-brand-5__item-box">
                <div className="tp-brand-5__item">
                  <img
                    src={brand.image}
                    alt={`brand-${index + 1}`}
                    className="img-fluid"
                    width={brand.width}
                    height={brand.height}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Brand;