import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import shape1 from "../../Assets/img/testimonial/shape-2-2.png";
import shape2 from "../../Assets/img/testimonial/shape-3-2.png";
import { Quote } from '../../svg/svg';
import { testimonial } from '../../Data/Data';

const Testimonial = () => {
  return (
    <div className="tp-testimonial-3__area tp-testimonial-3__space p-relative">
      <div className="tp-testimonial-3__shape-2 d-none d-xl-block">
        <img src={shape1} alt="shape" className="img-fluid" width="108" height="108" />
      </div>
      <div className="tp-testimonial-3__shape-3 d-none d-xl-block">
        <img src={shape2} alt="shape" className="img-fluid" width="87" height="87" />
      </div>
      <div className="container">
        <div className="tp-testimonial-3__wrapper">
          <Swiper
            style={{ padding: "20px" }}
            direction="horizontal"
            slidesPerView={1}
            loop={true}
            spaceBetween={60}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              '1400': {
                slidesPerView: 1,
              },
              '1200': {
                slidesPerView: 1,
              },
              '992': {
                slidesPerView: 1,
              },
              '768': {
                slidesPerView: 1,
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
            {testimonial.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="row align-items-center align-items-xl-start">
                  <div className="col-xl-5 col-lg-6 col-md-5">
                    <div className="tp-testimonial-3__thumb-box p-relative">
                      <div className="tp-testimonial-3__thumb">
                        <img src={data.authorImage} alt="author" className="img-fluid" width="358" height="406" />
                      </div>
                      <div className="tp-testimonial-3__shape-1">
                        <img src={data.shapeImage} alt="shape" className="img-fluid" width="423" height="382" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-7">
                    <div className="tp-testimonial-3__author-box">
                      <div className="tp-testimonial-3__author-top-box">
                        <div className="tp-testimonial-3__author-top d-flex align-items-center">
                          <i><Quote /></i>
                          <span>{data.quote} <br /> {data.quote1}</span>
                        </div>
                      </div>
                      <p>{data.content}</p>
                      <div className="tp-testimonial-3__author-info">
                        <span>
                          <strong>{data.authorInfo.name}</strong> {data.authorInfo.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;