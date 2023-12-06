import React from 'react';
import { Link } from 'react-router-dom';
import { timeItems } from '../../Data/Data';

const Deals = () => {
  return (
    <div className="tp-deal-4__area tp-deal-4__bg fix p-relative">
      <div className="tp-deal-4__shape-2 d-none d-xxl-block">
        <img src={require("../../Assets/img/product/deal-shape-4-1.png")} alt="shape" className="img-fluid" />
      </div>
      <div className="tp-deal-4__shape-3 d-none d-xl-block">
        <img src={require("../../Assets/img/product/deal-shape-4-2.png")} alt="shape" className="img-fluid" width="128" height="125" />
      </div>
      <div className="tp-deal-4__shape-4 d-none d-xl-block">
        <img src={require("../../Assets/img/product/deal-shape-4-3.png")} alt="shape" className="img-fluid" width="190" height="169" />
      </div>
      <div className="container custom-container-3">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-deal-4__content-box">
              <div className="tp-deal-4__section-box pb-10">
                <span className="tp-section-subtitle-6">
                  2023 Deals Of The Week
                </span>
                <h4 className="tp-section-title">
                  <span className="p-relative">
                    Deals{' '}
                    <span className="tp-title-shape">
                      <img src={require("../../Assets/img/svg/line1.svg").default} alt="line" />
                    </span>
                  </span>
                  Of The Week <br />
                  Women's wear
                </h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus obcaecati unde earum.
              </p>
              <div className="tp-deal-4__time-wrapper">
                <ul>
                  {timeItems.map((item, index) => (
                    <li key={index}>
                      <div className="tp-deal-4__time-box">
                        <i>{item.value}</i>
                        <span>{item.unit}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <Link className="tp-btn-white purple-bg-color" to="/">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-deal-4__thumb-box p-relative">
              <div className="tp-deal-4__main-thumb z-index-3">
                <img
                  src={require("../../Assets/img/product/deal-4-2.png")}
                  alt="deal product 1"
                  className="img-fluid"
                  width="366"
                  height="477"
                />
              </div>
              <div className="tp-deal-4__shape-1">
                <img
                  src={require("../../Assets/img/product/deal-4-1.png")}
                  alt="deal product 2"
                  className="img-fluid"
                  width="477"
                  height="484"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;