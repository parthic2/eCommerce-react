import React from 'react';
import shape1 from "../../../Assets/img/product/shappe-4-1.png";
import shape2 from "../../../Assets/img/product/shappe-4-2.png";
import line from "../../../Assets/img/svg/InnerLine.svg";
import ProductTab from './ProductTab';
import ProductContent from './ProductContent';

const Product = () => {
  return (
    <div className="tp-fea-product__area p-relative grey-bg-2 pb-100 pt-100 grey-bg-2">
      <div className="tp-fea-product__shape-1 d-none d-lg-block">
        <img src={shape1} alt="shape" className="img-fluid" width="83" height="82" />
      </div>
      <div className="tp-fea-product__shape-2 d-none d-xxl-block">
        <img src={shape2} alt="shape" className="img-fluid" />
      </div>
      <div className="container custom-container-3">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-fea-product__section-box text-center mb-35">
              <span className="tp-section-subtitle">Featured Product</span>
              <h1 className="tp-section-title-2">
                Featured {" "}
                <span className="p-relative">
                  Products
                  <span className="tp-title-shape">
                    <img src={line} alt="line" />
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="row">
          <ProductTab />
        </div>

        <div className="row">
          <ProductContent />
        </div>
      </div>
    </div>
  )
}

export default Product;