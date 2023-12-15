import React from 'react';
import TrendsTab from './TrendsTab';
import TrendsContent from './TrendsContent';

const TrendsProduct = () => {
  return (
    <div className="tp-trend-product-5__area pb-90">
      <div className="container custom-container-4">
        <div className="tp-trend-product-5__top-mb">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="tp-trend-product-5__section-title">
                <h4 className="tp-section-title-5">
                  <span className="p-relative">
                    Trending {" "}
                    <span className="tp-title-shape">
                      <img src={require("../../../Assets/img/svg/line1.svg").default} alt="line" />
                    </span>
                  </span>
                  Product
                </h4>
              </div>
            </div>
            <TrendsTab />
          </div>
        </div>
        <div className="row">
          <TrendsContent />
        </div>
      </div>
    </div>
  )
}

export default TrendsProduct;