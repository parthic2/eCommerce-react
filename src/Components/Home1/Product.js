import React from 'react';
import { Link } from 'react-router-dom';
import { features } from '../../Data/Data';

const Product = () => {
  return (
    <div className="tp-feature-4__area pt-90 pb-90">
      <div className="container custom-container-3">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 spacing-feature wow tpfadeUp" data-wow-duration={feature.duration} data-wow-delay={feature.delay}>
              <div className="tp-feature-4__item p-relative">
                <div className="tp-feature-4__thumb">
                  <img
                    src={feature.image}
                    alt="feature"
                    className="img-fluid"
                    width="356"
                    height="200"
                  />
                </div>
                <div className="tp-feature-4__content">
                  <span>Save 30%</span>
                  <h4 className="tp-feature-4__title">{feature.title}</h4>
                  <Link className="tp-btn-white-sm" to="/">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product;