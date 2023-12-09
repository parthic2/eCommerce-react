import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa6";
import service from "../../Assets/img/service/service-3-3.jpg";
import shape from "../../Assets/img/service/shape-3-3.jpg";
import { Plus } from '../../svg/svg';
import { services, servicesList } from '../../Data/Data';
import WOW from 'wowjs';

const Service = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <div className="tp-service-2__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-2__thumb-box-2 p-relative">
              <div
                className="tp-service-2__main-thumb-2 text-center text-lg-start"
              >
                <img
                  src={service}
                  alt="service"
                  width="457"
                  height="551"
                  className="img-fluid"
                />
                <div className="tp-service-2__icon">
                  <Link
                    className="popup-video"
                    to="/"
                    aria-label="video"
                  ><FaPlay /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s">
            <div className="tp-service-2__right-box-2">
              <div className="tp-service-2__section-title mb-30">
                <span className="tp-gradiant-section-subtitle">About us</span>
                <h1 className="tp-section-title-3">
                  Best Online Services <br /> For People
                </h1>
              </div>
              <div className="tp-service-2__text mb-25">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do
                </p>
              </div>
              <div className="tp-service-2__list mb-35">
                <ul>
                  {services.map((service) => (
                    <li key={service.id}>
                      <div className="tp-service-2__list-content d-flex align-items-center">
                        <span>{service.icon}</span>
                        <h1 className="tp-service-2__title-sm">{service.title}</h1>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="row">
                <div className="col-xl-7 col-12">
                  <div className="tp-service-2__list-box-2">
                    <ul>
                      {servicesList.map((service) => (
                        <li key={service.id}>
                          <i>{service.icon}</i>
                          {service.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-5 d-none d-xl-block">
                  <div className="tp-service-2__big-text p-relative">
                    <span><strong>30</strong> Services</span>
                    <div className="tp-service-2__text-shape-1">
                      <img
                        src={shape}
                        alt="shape"
                        className="img-fluid"
                        width="5"
                        height="79"
                      />
                    </div>
                    <div className="tp-service-2__text-shape-2">
                      <span><Plus /></span>
                    </div>
                  </div>
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