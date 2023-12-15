import React from 'react';
import { Link } from 'react-router-dom';
import cta from "../../Assets/img/cta/cta-1.png";
import line from "../../Assets/img/svg/InnerLine.svg";
import { ShopHand } from '../../svg/svg';

const Banner = () => {
  return (
    <section className="tp-cta__area tp-cta__grey-bg">
      <div className="container">
        <div className="tp-cta__bg p-relative">
          <div className="tp-cta__thumb d-none d-xl-block">
            <img src={cta} alt="cta bg" className="img-fluid" width="345" height="281" />
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-cta__content text-center">
                <h1 className="tp-cta__title">
                  Join our newsletter and get <br />
                  <span className="p-relative">
                    15% sale {" "}
                    <span className="tp-title-shape">
                      <img src={line} alt="line" />
                    </span>
                  </span>
                  discount
                </h1>
                <Link className="tp-btn-lg" to="/Home3">
                  Explore More
                  <i><ShopHand /></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;