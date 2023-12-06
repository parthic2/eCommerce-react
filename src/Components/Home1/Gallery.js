import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import gallery1 from "../../Assets/img/gallery/gallery-5-1.jpg";
import gallery2 from "../../Assets/img/gallery/gallery-5-2.jpg";
import gallery3 from "../../Assets/img/gallery/gallery-5-3.jpg";
import gallery4 from "../../Assets/img/gallery/gallery-5-4.jpg";
import gallery5 from "../../Assets/img/gallery/gallery-5-5.jpg";
import gallery6 from "../../Assets/img/gallery/gallery-5-6.jpg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <div className="tp-instagram-2__area">
      <div className="container-fluid g-0">
        <div className="tp-instagram-2-warpper">
          <Swiper
            direction="horizontal"
            slidesPerView={4}
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
                slidesPerView: 2,
              },
              '576': {
                slidesPerView: 2,
              },
              '0': {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay]}
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="tp-instagram-2__thumb">
                  <Link to="/">
                    <img
                      src={image}
                      alt={`gallery-${index + 1}`}
                      className="img-fluid"
                      width="340"
                      height="340"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Gallery;