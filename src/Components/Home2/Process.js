import React from 'react';
import shipping from "../../Assets/img/svg/shipping.svg";
import payment from "../../Assets/img/svg/payment.svg";
import support from "../../Assets/img/svg/support.svg";
import moneyBack from "../../Assets/img/svg/moneyBack.svg";
import quality from "../../Assets/img/svg/quality.svg";

const Process = () => {
  return (
    <div id="process" className="tp-feature-5__area tp-feature-5__space">
      <div className="container custom-container-4">
        <div className="tp-feature-5__border">
          <div
            className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-1 row-cols-sm-2"
          >
            <div className="col">
              <div className="tp-feature-5__item-box d-flex align-items-center">
                <div className="tp-feature-3__icon">
                  <span>
                    <img src={shipping} alt="Free shipping"/>
                  </span>
                </div>
                <div className="tp-feature-3__text">
                  <h1>Free Shipping</h1>
                  <span>Free shipping over $100</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="tp-feature-5__item-box d-flex align-items-center">
                <div className="tp-feature-3__icon">
                  <span>
                    <img src={payment} alt="Payment secure"/>
                  </span>
                </div>
                <div className="tp-feature-3__text">
                  <h1>Payment Secure</h1>
                  <span>Got 100% Payment Safe</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="tp-feature-5__item-box d-flex align-items-center">
                <div className="tp-feature-3__icon">
                  <span>
                    <img src={support} alt="Support"/>
                  </span>
                </div>
                <div className="tp-feature-3__text">
                  <h1>Support 24/7</h1>
                  <span>quality 24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="tp-feature-5__item-box d-flex align-items-center">
                <div className="tp-feature-3__icon">
                  <span>
                    <img src={moneyBack} alt="Money back"/>
                  </span>
                </div>
                <div className="tp-feature-3__text">
                  <h1>100% Money Back</h1>
                  <span>Customers Money Back</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="tp-feature-5__item-box border-none d-flex align-items-center"
              >
                <div className="tp-feature-3__icon">
                  <span>
                    <img src={quality} alt="Quality product"/>
                  </span>
                </div>
                <div className="tp-feature-3__text">
                  <h1>Quality Products</h1>
                  <span>We Insure Product Qua</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process;