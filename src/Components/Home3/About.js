import React from 'react';
import about from "../../Assets/img/about/about-1.svg";
import shape1 from "../../Assets/img/about/about-shape1-6.png";
import shape2 from "../../Assets/img/about/about-shape1-5.png";
import line from "../../Assets/img/svg/InnerLine.svg";
import { Tick } from '../../svg/svg';
import { aboutItems } from '../../Data/Data';

const About = () => {
  return (
    <div className="tp-about__area tp-about__space fix p-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-about__thumb-box">
              <div className="tp-about__thumb">
                <img src={about} alt="about" className="img-fluid" width="479" height="419" />
              </div>
              <div className="tp-about__thumb-text-box">
                <div className="tp-about__thumb-text">
                  <span><b>25,000+</b> Customer Worldwide</span>
                </div>
              </div>
              <div className="tp-about__shape-3">
                <img src={shape1} alt="shape" className="img-fluid" width="400" height="320" />
              </div>
              <div className="tp-about__shape-6 d-xxl-block">
                <img src={shape2} alt="shape" className="img-fluid" width="56" height="52" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
            <div className="tp-about__item-wrap">
              <div className="tp-about__section-box">
                <span className="tp-section-subtitle">About Our Company</span>
                <h4 className="tp-section-title pb-15">
                  High Quality Of {" "}
                  <span className="p-relative">
                    Delivery
                    <span className="tp-title-shape">
                      <img src={line} alt="line" />
                    </span>
                  </span>
                  Service
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              </div>
              <div className="tp-about__item-box d-flex align-items-center justify-content-start justify-content-md-between">
                {aboutItems.map((item, index) => (
                  <div key={index} className="tp-about__item d-flex align-items-start">
                    <div className="tp-about__icon">
                      <span>{item.icon}</span>
                    </div>
                    <div className="tp-about__text">
                      <h5 className="tp-about__title-sm">{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tp-about__list-box">
                <ul>
                  {['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'].map((item, index) => (
                    <li key={index}>
                      <span><Tick /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;