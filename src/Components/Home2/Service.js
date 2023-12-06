import React from 'react';
import shape1 from "../../Assets/img/feature/shape-2-2.png";
import shape2 from "../../Assets/img/feature/shape-2-3.png";
import shape3 from "../../Assets/img/feature/shape-2-4.png";
import shape4 from "../../Assets/img/feature/shape-2-5.png";
import shape5 from "../../Assets/img/feature/shape-2-1.png";
import feature1 from "../../Assets/img/feature/feature-2-1.jpg";
import feature2 from "../../Assets/img/feature/feature-2-2.jpg";
import feature3 from "../../Assets/img/feature/feature-2-3.jpg";

const Service = () => {
  return (
    <div className="tp-feature-2__area fix p-relative pb-125">
      <div className="tp-feature-2__shape-1 d-none d-xl-block">
        <img
          src={shape1}
          alt="shape"
          className="img-fluid"
          width="105"
          height="94"
        />
      </div>
      <div className="tp-feature-2__shape-2 d-none d-xl-block">
        <img
          src={shape2}
          alt="shape"
          className="img-fluid"
          width="215"
          height="565"
        />
      </div>
      <div className="tp-feature-2__shape-3 d-none d-xl-block">
        <img
          src={shape3}
          alt="shape"
          className="img-fluid"
          width="272"
          height="274"
        />
      </div>
      <div className="tp-feature-2__shape-4 d-none d-xl-block">
        <img
          src={shape4}
          alt="shape"
          className="img-fluid"
          width="105"
          height="122"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-feature-2__thumb-box p-relative text-end">
              <div className="tp-feature-2__thumb-shape d-none d-md-block">
                <img
                  src={shape5}
                  alt="shape"
                  className="img-fluid"
                  width="345"
                  height="369"
                />
              </div>
              <div className="tp-feature-2__thumb-1">
                <img
                  src={feature1}
                  alt="feature"
                  width="271"
                  height="213"
                  className="img-fluid"
                />
              </div>
              <div className="tp-feature-2__main-thumb">
                <img
                  src={feature3}
                  alt="feature"
                  width="294"
                  height="368"
                  className="img-fluid"
                />
              </div>
              <div className="tp-feature-2__thumb-2">
                <img
                  src={feature2}
                  alt="feature"
                  width="271"
                  height="318"
                  className="img-fluid"
                />
              </div>
              <div className="tp-feature-2__thumb-text d-none d-lg-block">
                <span><b>25,000 +</b> Customer Worldwide</span>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="tp-feature-2__right-box">
              <div className="tp-feature-2__section-box mb-40">
                <span className="tp-gradiant-section-subtitle">Some features of Our’s</span>
                <h1 className="tp-section-title-2">
                  How to shop & drop shipping works
                </h1>
              </div>
              <div className="tp-feature-2__item-box">
                <div className="tp-feature-2__item active">
                  <h4 className="tp-feature-2__title">
                    First of all have to Add your collection
                  </h4>
                  <p>
                    Lorem ipsum det, cowec tetur duis nec fringi det, consec t
                    eturlagix adipiscing eliet.
                  </p>
                </div>
                <div className="tp-feature-2__item">
                  <h4 className="tp-feature-2__title">
                    Perfect and time accurate Best Delivery
                  </h4>
                  <p>
                    Lorem ipsum det, cowec tetur duis nec fringi det, consec t
                    eturlagix adipiscing eliet.
                  </p>
                </div>
                <div className="tp-feature-2__item">
                  <h4 className="tp-feature-2__title">
                    Low cost & Branded Product & Enjoy It
                  </h4>
                  <p>
                    Lorem ipsum det, cowec tetur duis nec fringi det, consec t
                    eturlagix adipiscing eliet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;