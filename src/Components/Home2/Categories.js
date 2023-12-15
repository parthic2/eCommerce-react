import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import { Link } from 'react-router-dom';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import shape from "../../Assets/img/catagori/shape-2-1.png";
import line from "../../Assets/img/svg/InnerLine.svg";
import { catItems } from '../../Data/Data';

const Categories = () => {
  return (
    <section className="tp-catagori-2__area p-relative">
      <div className="tp-catagori-2__shape-1 d-none d-md-block">
        <img src={shape} alt="shape" className="img-fluid" width="12" height="12" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-catagori-2__section-title text-center mb-10">
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
              <div className="d-flex justify-content-end align-items-end gap-3 pt-10">
                <div className="tp-feature__arrow-box-prev d-xxl-block">
                  <div className="swiper-button-prev">
                    <button aria-label="Prev Button"><FaCaretLeft /></button>
                  </div>
                </div>

                <div className="tp-feature__arrow-box d-xxl-block">
                  <div className="swiper-button-next">
                    <button aria-label="Next Button"><FaCaretRight /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-catagori-2__wrapper p-relative pb-80">
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
            {catItems.map((categories, index) => (
              <SwiperSlide key={index}>
                <div className="tp-catagori-2__item text-center">
                  <div className="tp-catagori-2__icon">
                    <span>
                      <img src={categories.image} alt={categories.title} className="img-fluid" />
                    </span>
                  </div>
                  <h2 className="tp-catagori-2__title-2">
                    <Link to="/Home2">{categories.title}</Link>
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Categories;