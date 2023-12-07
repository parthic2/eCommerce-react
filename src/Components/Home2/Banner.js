import React from 'react';
import shape1 from "../../Assets/img/gallery/shape-3-1.png";
import shape2 from "../../Assets/img/gallery/shape-3-2.png";
import shape3 from "../../Assets/img/gallery/shape-3-3.png";
import line from "../../Assets/img/svg/InnerLine.svg";
import { Circle } from '../../svg/svg';

const Banner = () => {
  return (
    <div className="tp-team-3__top-area fix tp-team-3__top-bg p-relative pt-110">
      <div className="tp-team-3__shape-1 d-none d-xl-block">
        <img src={shape1} alt="shape" className="img-fluid" width="193" height="535" />
      </div>
      <div className="tp-team-3__shape-2 d-none d-xl-block">
        <img src={shape2} alt="shape" className="img-fluid" width="12" height="12" />
      </div>
      <div className="tp-team-3__shape-3 d-none d-xl-block">
        <img src={shape3} alt="shape" className="img-fluid" width="21" height="21" />
      </div>
      <div className="container custom-container-1">
        <div className="tp-team-3__top-pb">
          <div className="row align-items-start">
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="tp-team-3__top-left">
                <h1 className="tp-team-3__top-title">
                  Join our newsletter and get{' '}
                  <span className="p-relative">
                    15% sale discount
                    <span className="tp-title-shape">
                      <img src={line} alt="line" />
                    </span>
                  </span>
                </h1>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-4 d-none d-md-block">
              <div className="tp-team-3__top-right text-end">
                <ul>
                  <li>
                    <div className="tp-team-3__top-item">
                      <h2 className="p-relative">
                        <span className="purecounter">99</span>%
                        <span className="tp-team-3__title-shape d-none d-xl-block">
                          <Circle />
                        </span>
                      </h2>
                      <p className="pt-10">
                        Business is the activity <br /> cing or buying and
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="tp-team-3__top-item d-none d-lg-block">
                      <h2>
                        <span className="purecounter">10</span>m$
                      </h2>
                      <p>
                        Business is the activity <br /> cing or buying and
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;