import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import shape1 from "../../Assets/img/hero/hero-shape-1-5.png";
import shape2 from "../../Assets/img/hero/hero-shape-1-7.png";
import shape3 from "../../Assets/img/hero/hero-shape-1-8.png";
import shape4 from "../../Assets/img/hero/hero-shape-1-6.png";
import shape5 from "../../Assets/img/hero/hero-shape-1-9.png";
import hero from "../../Assets/img/hero/hero-1.png";
import line from "../../Assets/img/svg/InnerLine.svg";
import { ShopHand } from '../../svg/svg';
import WOW from 'wowjs';

const Hero = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <section className="tp-hero__area z-index">
      <div className="tp-hero__bg tp-hero__height p-relative fix">
        <div className="tp-hero__shape-5 d-none d-xl-block">
          <img src={shape1} alt="shape" className="img-fluid" width="33" height="31" />
        </div>
        <div className="tp-hero__shape-7 d-none d-xl-block">
          <img src={shape2} alt="shape" className="img-fluid" width="20" height="18" />
        </div>
        <div className="tp-hero__shape-8">
          <img src={shape3} alt="shape" className="img-fluid" width="126" height="246" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero__left-box z-index">
                <div className="tp-hero__section-box">
                  <span className="tp-hero-subtitle wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    Beats Solo Stylish Design
                  </span>
                  <h3 className="tp-hero-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                    <span className="p-relative">
                      20% Off {" "}
                      <span className="tp-title-shape">
                        <img src={line} alt="line" />
                      </span>
                    </span>
                    Beats <br /> Solo Headphones
                  </h3>
                </div>
                <div className="tp-hero__left-text wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                  <Link className="tp-main-btn" to="/Home3">
                    Let’s start — shop now
                    <i><ShopHand /></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero__thumb-box p-relative text-center text-lg-end">
                <img src={hero} alt="hero banner" className="img-fluid" width="501" height="472" />
                <div className="tp-hero__shape-6 d-none d-md-block">
                  <img src={shape4} alt="shape" className="img-fluid" width="41" height="42" />
                </div>
                <div className="tp-hero__shape-9">
                  <img src={shape5} alt="shape" className="img-fluid" width="355" height="355" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;