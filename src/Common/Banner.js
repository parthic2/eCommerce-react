import React from 'react';
import line from "../Assets/img/svg/shape.svg";
import icon from "../Assets/img/svg/btnIcon.svg";
import bg from "../Assets/img/cta/cta-4-1.png";
import bg1 from "../Assets/img/cta/cta-4-5.png";
import shape from "../Assets/img/cta/cta-4-3.png";
import shape1 from "../Assets/img/cta/cta-4-4.png";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="tp-cta-4__area">
      <div className="tp-cta-4__bg fix p-relative">
        <div className="tp-cta-4__shape-1 d-none d-lg-block">
          <img src={bg} alt="" />
        </div>
        <div className="tp-cta-4__shape-6 d-none d-xl-block">
          <img src={bg1} alt="" />
        </div>
        <div className="tp-cta-4__shape-3 d-none d-lg-block">
          <img src={shape} alt="" />
        </div>
        <div className="tp-cta-4__shape-4 d-none d-lg-block">
          <img src={shape1} alt="" />
        </div>
        <div className="container custom-container-3">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-cta-4__content text-center z-index">
                <h3 className="tp-cta-4__title">
                  Join Our Newsletter And Get <br />
                  <span className="p-relative"
                  >15% Sale {" "}
                    <span className="tp-title-shape">
                      <img src={line} alt="line" />
                    </span>
                  </span>
                  Discount
                </h3>
                <Link className="tp-btn-lg" to="#">
                  Explore More
                  <i>
                    <img src={icon} alt="icon" />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;