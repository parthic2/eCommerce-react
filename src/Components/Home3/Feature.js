import React from 'react';
import business from '../../Assets/img/business/business-1.png';
import shape1 from '../../Assets/img/business/shape-1-2.png';
import shape2 from '../../Assets/img/business/shape-1-3.png';
import shape3 from '../../Assets/img/business/shape-1-4.png';
import line from "../../Assets/img/svg/InnerLine.svg";
import { Line } from '../../svg/svg';
import { contentItems, featureData } from '../../Data/Data';

const Feature = () => {
  return (
    <div className="tp-business__area fix pt-30 pb-30">
      <div className="tp-business__bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-business__section-box pb-45 text-center">
                <span className="tp-section-subtitle">Available Features</span>
                <h1 className="tp-section-title">
                  Available {" "}
                  <span className="p-relative">
                    Features
                    <span className="tp-title-shape">
                      <img src={line} alt="line" />
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="tp-business__item-box mb-20">
            <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-3 row-cols-2">
              {featureData.map((item, index) => (
                <div key={index} className="col mb-30 tp-business">
                  <div className="tp-business__item text-center">
                    <span>{item.icon}</span>
                    <h1 className="tp-business__title">{item.title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-business__left-thumb text-center text-lg-start">
                <img src={business} alt="business banner" className="img-fluid" width="546" height="363" />
                <div className="tp-business__shape-2 d-none d-xl-block">
                  <img src={shape1} alt="shape" className="img-fluid" width="56" height="52" />
                </div>
                <div className="tp-business__shape-3 d-none d-xxl-block">
                  <img src={shape2} alt="shape" className="img-fluid" />
                </div>
                <div className="tp-business__shape-4 d-none d-xl-block">
                  <img src={shape3} alt="shape" className="img-fluid" width="90" height="81" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-business__content-box p-relative">
                <div className="tp-business__content-shape d-none d-md-block">
                  <span><Line /></span>
                </div>
                <ul>
                  {contentItems.map((item, index) => (
                    <li key={index}>
                      <div className="tp-business__content d-flex align-items-start">
                        <div className="tp-business__number">
                          <span>{item.number}</span>
                        </div>
                        <div className="tp-business__content-text">
                          <h1 className="tp-business__content-title">
                            {item.title}
                          </h1>
                          <p>{item.content}</p>
                        </div>
                      </div>
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

export default Feature;