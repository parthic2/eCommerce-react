import React from 'react';
import brand1 from "../../Assets/img/brand/brand-5-1.png";
import brand2 from "../../Assets/img/brand/brand-5-2.png";
import brand3 from "../../Assets/img/brand/brand-5-3.png";
import brand4 from "../../Assets/img/brand/brand-5-4.png";
import brand5 from "../../Assets/img/brand/brand-5-5.png";
import brand6 from "../../Assets/img/brand/brand-5-6.png";
import brand7 from "../../Assets/img/brand/brand-5-7.png";
import brand8 from "../../Assets/img/brand/brand-5-8.png";
import brand9 from "../../Assets/img/brand/brand-5-9.png";

const brandImages = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9];

const Brands = () => {
  return (
    <div className="tp-brand-6__area pt-105 pb-70">
      <div className="container custom-container-4">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-brand-6__title-box text-center mb-60">
              <h1 className="tp-brand-6__title">
                Relied on Brands trusted by many user and <br />
                be beloved by executives
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          {brandImages.map((brand, index) => (
            <div key={index} className="col-xl-2 col-lg-2 col-md-3 col-6 col-sm-4 mb-45">
              <div className="tp-brand-6__item">
                <img
                  src={brand}
                  alt={`brand-${index + 1}`}
                  className="img-fluid"
                  width="166"
                  height="63"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;