import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import whiteBg from "../../Assets/img/hero/white-bg.png";
import line from "../../Assets/img/svg/InnerLine.svg";
import Process from './Process';
import WOW from 'wowjs';

const Hero = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  const processRef = useRef(null);

  const handleScrollDown = () => {
    if (processRef.current) {
      processRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="tp-hero-3__area">
        <div className="tp-hero-3__bg p-relative">
          <div className="scroll-bg-2 d-none d-sm-block">
            <img src={whiteBg} alt="hero bg" className="img-fluid" width="260" height="70" />
          </div>
          <div className="tp-hero-3__mouse-scroll smooth d-none d-sm-block">
            <Link className="mouse-scroll-btn-2" aria-label="Process Btn" onClick={handleScrollDown}></Link>
            <span>Scroll Down</span>
          </div>
          <div className="container custom-container-1">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-3__content-box z-index p-relative">
                  <div className="tp-hero-3__section-box mb-30">
                    <span className="tp-hero-3-subtitle wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                      Dress up your style
                    </span>
                    <h2 className="tp-hero-3-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                      Choose {" "}
                      <span className="p-relative">
                        Amazing <br />
                        <span className="tp-slider-2-title-shape">
                          <img src={line} alt="line" />
                        </span>
                      </span>
                      New Collection
                    </h2>
                  </div>
                  <div className="tp-hero-3__text wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do Lorem ipsum dolor sit amet </p>
                    <Link className="tp-btn-lg large" to="/Home2">Contact With us</Link>
                  </div>
                  <div className="tp-hero-3__shape-animation">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Process processRef={processRef} />
    </>
  )
}

export default Hero;