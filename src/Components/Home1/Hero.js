import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import shape42 from '../../Assets/img/hero/shape-4-2.png';
import shape43 from '../../Assets/img/hero/shape-4-3.png';
import line1 from '../../Assets/img/svg/line1.svg';
import hero4 from '../../Assets/img/hero/hero-4.svg';
import heroShape41 from '../../Assets/img/hero/hero-shape-4-1.png';
import heroShape42 from '../../Assets/img/hero/hero-shape-4-2.png';
import heroShape43 from '../../Assets/img/hero/hero-shape-4-3.png';
import { ShopNow } from '../../svg/svg';
import WOW from 'wowjs';

const Hero = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <section className={`tp-hero-4__area fix`}>
      <div className="tp-hero-4__bg p-relative">
        <div className="tp-hero-4__shape-2 d-none d-xl-block">
          <img src={shape42} alt="shape" className="img-fluid" width="83" height="82" />
        </div>
        <div className="tp-hero-4__shape-3 d-none d-xl-block">
          <img src={shape43} alt="shape" className="img-fluid" width="313" height="337" />
        </div>
        <div className="container custom-container-3">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-hero-4__6">
                <div className="tp-hero-4__left-box z-index">
                  <div className="tp-hero-4__section-box pb-15">
                    <span
                      className="tp-hero-4-subtitle wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                    >Everything's On Sale!</span>
                    <h3
                      className="tp-hero-4-title wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".5s"
                    >
                      Huge <span className="p-relative">
                        Savings,
                        <span className="tp-title-shape">
                          <img src={line1} alt="line" />
                        </span>
                      </span>
                      <br />
                      Limited Time!
                    </h3>
                  </div>
                  <div
                    className="tp-hero-4__content wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                  >
                    <span>$ 180.99  / <del> $2860</del></span>
                    <p>Sumptuous, filling, and temptingly healthy.</p>
                    <Link className="tp-btn-white purple-bg-color" to="/">
                      <i><ShopNow /></i>
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="tp-hero-4__thumb-box p-relative text-end">
                <div className="tp-hero-4__shape-1 d-none d-xl-block">
                  <img src={heroShape41} alt="shape" className="img-fluid" width="18" height="18" />
                </div>
                <div className="tp-hero-4__shape-4 d-none d-xl-block">
                  <img src={heroShape41} alt="shape" className="img-fluid" width="470" height="470" />
                </div>
                <div className="tp-hero-4__shape-5 d-none d-xl-block">
                  <img src={heroShape42} alt="shape" className="img-fluid" width="538" height="535" />
                </div>
                <div className="tp-hero-4__shape-6 d-none d-xl-block">
                  <img src={heroShape43} alt="shape" className="img-fluid" width="128" height="125" />
                </div>
                <div className="tp-hero-4__main-thumb z-index-3">
                  <img src={hero4} alt="hero bg" className="img-fluid" width="661" height="441" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;