import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import shape1 from "../../Assets/img/testimonial/shape-2-2.png";
import shape2 from "../../Assets/img/testimonial/shape-3-2.png";
import author1 from "../../Assets/img/testimonial/author-3-1.png";
import author2 from "../../Assets/img/testimonial/shape-3-1.png";

const Testimonial = () => {
  return (
    <div className="tp-testimonial-3__area tp-testimonial-3__space p-relative">
      <div className="tp-testimonial-3__shape-2 d-none d-xl-block">
        <img
          src={shape1}
          alt="shape"
          className="img-fluid"
          width="108"
          height="108"
        />
      </div>
      <div className="tp-testimonial-3__shape-3 d-none d-xl-block">
        <img
          src={shape2}
          alt="shape"
          className="img-fluid"
          width="87"
          height="87"
        />
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
            <SwiperSlide>
              <div className="row align-items-center align-items-xl-start">
                <div className="col-xl-5 col-lg-6 col-md-5">
                  <div className="tp-testimonial-3__thumb-box p-relative">
                    <div className="tp-testimonial-3__thumb">
                      <img
                        src={author1}
                        alt="author"
                        className="img-fluid"
                        width="358"
                        height="406"
                      />
                    </div>
                    <div className="tp-testimonial-3__shape-1">
                      <img
                        src={author2}
                        alt="shape"
                        className="img-fluid"
                        width="423"
                        height="382"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-7">
                  <div className="tp-testimonial-3__author-box">
                    <div className="tp-testimonial-3__author-top-box">
                      <div
                        className="tp-testimonial-3__author-top d-flex align-items-center"
                      >
                        <i>
                          <svg
                            width="55"
                            height="59"
                            viewBox="0 0 55 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_257_50)">
                              <path
                                d="M55 25.0447H43.2143L51.0715 8.34839H39.2858L31.4286 25.0447V50.0894H55V25.0447Z"
                                fill="#735CFC"
                              />
                              <path
                                d="M23.5713 50.0894V25.0447H11.7856L19.6428 8.34839H7.85709L-0.000102997 25.0447V50.0894H23.5713Z"
                                fill="#735CFC"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_257_50">
                                <rect
                                  width="55"
                                  height="58.4375"
                                  fill="white"
                                  transform="matrix(-1 0 0 -1 55 58.4375)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </i>
                        <span>
                          I Really Enjoyed <br />Working With Jacob
                        </span>
                      </div>
                    </div>
                    <p>
                      The other hand we denounce with righteou indg ation
                      and di men who are so beguiled and demorali ed by the
                      of pleasure moment.Dislike men who are so beguiled and
                      demoraliz by the charms of pleasure “
                    </p>
                    <div className="tp-testimonial-3__author-info">
                      <span>
                        <strong>Mathias Herasen</strong> Founder of
                        GamerPay
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row align-items-center align-items-xl-start">
                <div className="col-xl-5 col-lg-6 col-md-5">
                  <div className="tp-testimonial-3__thumb-box p-relative">
                    <div className="tp-testimonial-3__thumb">
                      <img
                        src={author1}
                        alt="author"
                        className="img-fluid"
                        width="358"
                        height="406"
                      />
                    </div>
                    <div className="tp-testimonial-3__shape-1">
                      <img
                        src={author2}
                        alt="shape"
                        className="img-fluid"
                        width="423"
                        height="382"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-7">
                  <div className="tp-testimonial-3__author-box">
                    <div className="tp-testimonial-3__author-top-box">
                      <div
                        className="tp-testimonial-3__author-top d-flex align-items-center"
                      >
                        <i>
                          <svg
                            width="55"
                            height="59"
                            viewBox="0 0 55 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_257_50)">
                              <path
                                d="M55 25.0447H43.2143L51.0715 8.34839H39.2858L31.4286 25.0447V50.0894H55V25.0447Z"
                                fill="#735CFC"
                              />
                              <path
                                d="M23.5713 50.0894V25.0447H11.7856L19.6428 8.34839H7.85709L-0.000102997 25.0447V50.0894H23.5713Z"
                                fill="#735CFC"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_257_50">
                                <rect
                                  width="55"
                                  height="58.4375"
                                  fill="white"
                                  transform="matrix(-1 0 0 -1 55 58.4375)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </i>
                        <span>
                          I Really Enjoyed <br />Working With Jacob
                        </span>
                      </div>
                    </div>
                    <p>
                      The other hand we denounce with righteou indg ation
                      and di men who are so beguiled and demorali ed by the
                      of pleasure moment.Dislike men who are so beguiled and
                      demoraliz by the charms of pleasure “
                    </p>
                    <div className="tp-testimonial-3__author-info">
                      <span>
                        <strong>Mathias Herasen</strong> Founder of
                        GamerPay
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;