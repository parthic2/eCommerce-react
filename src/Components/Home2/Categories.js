import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import { Link } from 'react-router-dom';
import shape from "../../Assets/img/catagori/shape-2-1.png";
import cat1 from "../../Assets/img/catagori/cat-1.png";
import cat2 from "../../Assets/img/catagori/cat-2.png";
import cat3 from "../../Assets/img/catagori/cat-3.svg";
import cat4 from "../../Assets/img/catagori/cat-4.png";
import cat5 from "../../Assets/img/catagori/cat-5.png";
import cat6 from "../../Assets/img/catagori/cat-6.png";
import cat7 from "../../Assets/img/catagori/cat-7.png";
import line from "../../Assets/img/svg/InnerLine.svg";

const Categories = () => {
  return (
    <div className="tp-catagori-2__area p-relative">
      <div className="tp-catagori-2__shape-1 d-none d-md-block">
        <img
          src={shape}
          alt="shape"
          className="img-fluid"
          width="12"
          height="12"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-catagori-2__section-title text-center mb-50">
              <span className="tp-gradiant-section-subtitle">
                Explore all categories
              </span>
              <h1 className="tp-section-title-2">
                Explore all {" "}
                <span className="p-relative">
                  categories
                  <span className="tp-title-shape">
                    <img src={line} alt="line" />
                  </span>
                </span>
              </h1>
              <div
                className="d-flex justify-content-end align-items-end gap-3 pt-10"
              >
                <div className="tp-feature__arrow-box-prev d-xxl-block">
                  <div className="swiper-button-prev">
                    <button aria-label="Prev Button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 256 512"
                      >
                        <path
                          d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="tp-feature__arrow-box d-xxl-block">
                  <div className="swiper-button-next">
                    <button aria-label="Next Button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 256 512"
                      >
                        <path
                          d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-catagori-2__wrapper p-relative mb-75">
          <Swiper
            style={{ padding: "20px" }}
            direction="horizontal"
            slidesPerView={6}
            loop={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              '1400': {
                slidesPerView: 6,
              },
              '1200': {
                slidesPerView: 5,
              },
              '992': {
                slidesPerView: 3,
              },
              '768': {
                slidesPerView: 2,
              },
              '576': {
                slidesPerView: 2,
              },
              '0': {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <div className="tp-catagori-2__item text-center">
                <div className="tp-catagori-2__icon">
                  <span>
                    <img src={cat1} alt="categories-1" className="img-fluid" />
                  </span>
                </div>
                <h2 className="tp-catagori-2__title-2">
                  <Link to="/Home2">Women Ethnic</Link>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-catagori-2__item text-center">
                <div className="tp-catagori-2__icon">
                  <span>
                    <img src={cat2} alt="categories-2" className="img-fluid" />
                  </span>
                </div>
                <h2 className="tp-catagori-2__title-2">
                  <Link to="/Home2">Clothing & Bags</Link>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-catagori-2__item text-center">
                <div className="tp-catagori-2__icon">
                  <span>
                    <img src={cat3} alt="categories-3" className="img-fluid" />
                  </span>
                </div>
                <h2 className="tp-catagori-2__title-2">
                  <Link to="/Home2">Men's Wear</Link>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-catagori-2__item text-center">
                <div className="tp-catagori-2__icon">
                  <span>
                    <img src={cat4} alt="categories-4" className="img-fluid" />
                  </span>
                </div>
                <h2 className="tp-catagori-2__title-2">
                  <Link to="/Home2">Kids wear</Link>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-catagori-2__item text-center">
                <div className="tp-catagori-2__icon">
                  <span>
                    <img src={cat5} alt="categories-5" className="img-fluid" />
                  </span>
                </div>
                <h2 className="tp-catagori-2__title-2">
                  <Link to="/Home2">Women Western</Link>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-catagori-2__item text-center">
                <div className="tp-catagori-2__icon">
                  <span>
                    <img src={cat6} alt="categories-6" className="img-fluid" />
                  </span>
                </div>
                <h2 className="tp-catagori-2__title-2">
                  <Link to="/Home2">Accessories</Link>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-catagori-2__item text-center">
                <div className="tp-catagori-2__icon">
                  <span>
                    <img src={cat7} alt="categories-7" className="img-fluid" />
                  </span>
                </div>
                <h2 className="tp-catagori-2__title-2">
                  <Link to="/Home2">Beauty & Health</Link>
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Categories;