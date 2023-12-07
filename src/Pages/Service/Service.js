import React from 'react';
import Breadcrumb from '../../Common/Breadcrumb';
import Footer from '../../Components/Home1/Footer/Footer';
import Header from '../../Components/Home1/Header/Header';
import Banner from '../../Common/Banner';
import shape from "../../Assets/img/cta/shape.png";
import arrow from "../../Assets/img/svg/arrow.svg";
import { Link } from 'react-router-dom';
import { servicesData } from '../../Data/Data';

const Service = () => {
  return (
    <>
      <Header />

      <Breadcrumb
        home="home"
        ser="Service"
        title="Our "
        title1="Service"
      />

      <div className="tp-service-3__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            {servicesData.map((service, index) => (
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-30" key={index}>
                <div className="tp-service-3__item">
                  <div className="tp-service-3__icon d-flex align-items-center justify-content-between">
                    <span className="p-relative">
                      {service.icon}
                      <span className="tp-service-3__icon-shape">
                        <img
                          src={shape}
                          alt="shape"
                          className="img-fluid"
                          width="70"
                          height="56"
                        />
                      </span>
                    </span>
                    <Link to="/">
                      <img src={arrow} alt="arrow" />
                    </Link>
                  </div>
                  <div className="tp-service-3__content">
                    <h1 className="tp-service-3__title">
                      <Link to="/">{service.title}</Link>
                    </h1>
                    <span>{service.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Banner />
      <Footer />
    </>
  )
}

export default Service;