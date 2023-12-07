import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import { Link } from 'react-router-dom';
import shape from "../../Assets/img/project/shape-1-1.png";
import { ShopHand } from '../../svg/svg';
import { galleryData } from '../../Data/Data';

const Gallery = () => {
  return (
    <div className="tp-project-3__area p-relative pt-90 pb-90">
      <div className="tp-project-3__shape-1 d-none d-xl-block">
        <img
          src={shape}
          alt="shape"
          className="img-fluid"
          width="120"
          height="483"
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-project-3__wrapper">
              <Swiper
                direction="horizontal"
                slidesPerView={5}
                loop={true}
                spaceBetween={30}
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
                    slidesPerView: 1,
                  },
                  '0': {
                    slidesPerView: 1,
                  },
                }}
                modules={[Autoplay]}
              >
                {galleryData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="tp-project-3__item">
                      <img
                        src={item.image}
                        alt="project"
                        className="img-fluid"
                        width="312"
                        height={index % 2 === 0 ? "312" : "415"}
                      />
                      <div className="tp-project-3__text-box">
                        <div className="tp-project-3__content">
                          <h6><Link to="/Home2">{item.title}</Link></h6>
                          <div className="tp-project-3__text">
                            <span>{item.category}</span>
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
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-project-3__button text-center pt-90">
              <Link className="tp-main-btn" to="/Home2">
                Let’s start — Shop now
                <i><ShopHand /></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;