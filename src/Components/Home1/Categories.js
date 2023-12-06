import React from 'react';
import { Link } from 'react-router-dom';
import { categoryData } from '../../Data/Data';

const Categories = () => {
  return (
    <div className="tp-product-4__area pt-120 pb-90 grey-bg-2">
      <div className="container custom-container-3">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-product-4__section-box text-center mb-60">
              <span className="tp-section-subtitle-5">Category Product</span>
              <h1 className="tp-section-title-2">
                Product {" "}
                <span className="p-relative">
                  Categories
                  <span className="tp-title-shape">
                    <img src={require("../../Assets/img/svg/line1.svg").default} alt="line" />
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          {categoryData.map((category, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div
                className="tp-product-4__item"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="tp-product-4__content">
                  <h2 className="tp-product-4__title">
                    <Link to="/">{category.title}</Link>
                  </h2>
                  <span>({category.products} Product)</span>
                  <Link className="tp-btn-border-sm" to="/">Shop Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories;