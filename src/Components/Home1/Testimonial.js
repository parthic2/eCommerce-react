import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import { FaStar } from 'react-icons/fa6';
import { testimonialData } from '../../Data/Data';

const Testimonial = () => {
  return (
    <div className="tp-testimonial-5__area tp-testimonial-5__space grey-bg-2">
      <div className="container custom-container-4">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-testimonial-2__wrapper p-relative">
              <Swiper
                direction="horizontal"
                slidesPerView={3}
                loop={true}
                spaceBetween={40}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
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
                {testimonialData.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="tp-testimonial-5__item p-relative">
                      <div className="tp-testimonial-5__content p-relative">
                        <div className="tp-testimonial-5__star">
                          {[...Array(testimonial.starCount)].map((_, index) => (
                            <i key={index}><FaStar /></i>
                          ))}
                        </div>
                        <p>{testimonial.content}</p>
                        <div className="tp-testimonial-5__shape-1">
                          <span>
                            <img src={require("../../Assets/img/svg/testArrow.svg").default} alt="arrow" />
                          </span>
                        </div>
                      </div>
                      <div className="tp-testimonial-5__author-box d-flex align-items-center">
                        <div className="tp-testimonial-5__thumb">
                          <img
                            src={testimonial.image}
                            alt="testimonial"
                            className="img-fluid"
                            width="80"
                            height="80"
                          />
                        </div>
                        <div className="tp-testimonial-5__author-info">
                          <h1 className="tp-testimonial-5__title-sm">“{testimonial.title}</h1>
                          <span>{testimonial.role}</span>
                        </div>
                        <div className="tp-testimonial-5__quot-box">
                          <span>
                            <img src={require("../../Assets/img/svg/testQuot.svg").default} alt="Quot" />
                          </span>
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
  );
}

export default Testimonial;