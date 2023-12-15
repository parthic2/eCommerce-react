import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import product2 from "../../Assets/img/product/product-2-2.jpg";
import line from "../../Assets/img/svg/InnerLine.svg";
import { Connect, Like } from '../../svg/svg';
import { ProductData } from '../../Data/Data';

const Product = () => {
  return (
    <section className="tp-product-2__area">
      <div className="container custom-container-1">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-catagori-2__section-title text-center mb-10">
              <span className="tp-gradiant-section-subtitle">Featured Products</span>
              <h1 className="tp-section-title-2"> Featured {" "}
                <span className="p-relative"> products
                  <span className="tp-title-shape"><img src={line} alt="line" /></span>
                </span>
              </h1>
              <div className="d-flex justify-content-end align-items-end gap-3 pt-10">
                <div className="tp-feature__arrow-box-prev d-xxl-block">
                  <div className="swiper-button-prev-1">
                    <button aria-label="Prev Button"><FaCaretLeft /></button>
                  </div>
                </div>

                <div className="tp-feature__arrow-box d-xxl-block">
                  <div className="swiper-button-next-1">
                    <button aria-label="Next Button"><FaCaretRight /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="tp-product-2__wrapper p-relative">
            <Swiper
              direction="horizontal"
              slidesPerView={4}
              loop={true}
              navigation={{
                prevEl: '.swiper-button-prev-1',
                nextEl: '.swiper-button-next-1',
              }}
              spaceBetween={30}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                '1400': {
                  slidesPerView: 4,
                },
                '1200': {
                  slidesPerView: 3,
                },
                '992': {
                  slidesPerView: 3,
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
              modules={[Autoplay, Navigation]}
            >
              {ProductData.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="tp-product-2__item">
                    <div className="tp-product-2__thumb p-relative">
                      <img src={product.imgSrc} alt={product.title} className="img-fluid" width="328" height="328" />
                      {index === 2 || index === ProductData.length - 1 ? (
                        <div className="tp-product-2__thumb-text">
                          <img src={product2} alt="product new" className="img-fluid" width="58" height="21" />
                        </div>
                      ) : null}
                    </div>
                    <div className="tp-product-2__content">
                      <div className="tp-product-2__star">
                        {[...Array(5)].map((_, index) => (
                          <i key={index} className={index < product.list ? "" : "color"}><FaStar /></i>
                        ))}
                      </div>
                      <h1 className="tp-product-2__title-sm">
                        <Link to="/Home2">{product.title}</Link>
                      </h1>
                      <div className="tp-product-2__price-box d-flex align-items-start justify-content-between">
                        <div className="tp-product-2__price">
                          <span>{product.newPrice}</span>
                          <del>{product.oldPrice}</del>
                        </div>
                        <div className="tp-product-2__icon">
                          <Link to="/Home2" aria-label="Link"><Connect /></Link>
                          <Link to="/Home2" aria-label="Like"><Like /></Link>
                        </div>
                      </div>
                    </div>
                    <div className="tp-product-2__button-box">
                      <Link className="tp-btn-cart" to="/Home2">
                        <span>
                          <img src={require("../../Assets/img/svg/addCart.svg").default} alt="add to cart" />
                        </span>
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product;