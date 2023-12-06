import React from 'react';
import { Link } from 'react-router-dom';
import service from "../../Assets/img/service/service-3-3.jpg";
import shape from "../../Assets/img/service/shape-3-3.jpg";

const Service = () => {
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
                  ><i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
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
                  <li>
                    <div
                      className="tp-service-2__list-content d-flex align-items-center"
                    >
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.7489 4.82063L10.2034 0.0478977C10.0755 -0.0159659 9.92455 -0.0159659 9.79682 0.0478977L0.251364 4.82063C0.0972727 4.89767 0 5.05494 0 5.22722V14.7727C0 14.9449 0.0972727 15.1022 0.251136 15.1793L9.79659 19.952C9.86068 19.984 9.93023 19.9999 10 19.9999C10.0698 19.9999 10.1393 19.984 10.2034 19.952L19.7489 15.1793C19.9027 15.1022 20 14.9449 20 14.7727V5.22722C20 5.05494 19.9027 4.89767 19.7489 4.82063ZM10 0.962671L18.5291 5.22722L16.7045 6.13949L8.17568 1.87494L10 0.962671ZM13.0682 7.95767L4.53909 3.69313L7.15909 2.38313L15.6882 6.64767L13.0682 7.95767ZM13.4091 8.80358L16.1364 7.43994V10.8211L15.2641 10.1981C15.1652 10.1274 15.0416 10.0995 14.9218 10.1202C14.802 10.1413 14.6955 10.2093 14.6261 10.3093L13.4091 12.0677V8.80358ZM3.52273 4.20131L12.0516 8.46585L10 9.49176L1.47091 5.22722L3.52273 4.20131ZM0.909091 5.96267L9.54545 10.2809V18.8097L0.909091 14.4915V5.96267ZM10.4545 18.8099V10.2809L12.5 9.25813V13.5227C12.5 13.7215 12.6291 13.8972 12.8189 13.9565C12.8639 13.9706 12.9093 13.9772 12.9545 13.9772C13.1009 13.9772 13.2418 13.9063 13.3284 13.7815L15.1114 11.2063L16.327 12.0745C16.4657 12.1734 16.648 12.1868 16.7991 12.1086C16.9502 12.0309 17.0455 11.8747 17.0455 11.7045V6.9854L19.0909 5.96267V14.4915L10.4545 18.8099Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h1 className="tp-service-2__title-sm">Best Delivery</h1>
                    </div>
                  </li>
                  <li>
                    <div
                      className="tp-service-2__list-content d-flex align-items-center"
                    >
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.7489 4.82063L10.2034 0.0478977C10.0755 -0.0159659 9.92455 -0.0159659 9.79682 0.0478977L0.251364 4.82063C0.0972727 4.89767 0 5.05494 0 5.22722V14.7727C0 14.9449 0.0972727 15.1022 0.251136 15.1793L9.79659 19.952C9.86068 19.984 9.93023 19.9999 10 19.9999C10.0698 19.9999 10.1393 19.984 10.2034 19.952L19.7489 15.1793C19.9027 15.1022 20 14.9449 20 14.7727V5.22722C20 5.05494 19.9027 4.89767 19.7489 4.82063ZM10 0.962671L18.5291 5.22722L16.7045 6.13949L8.17568 1.87494L10 0.962671ZM13.0682 7.95767L4.53909 3.69313L7.15909 2.38313L15.6882 6.64767L13.0682 7.95767ZM13.4091 8.80358L16.1364 7.43994V10.8211L15.2641 10.1981C15.1652 10.1274 15.0416 10.0995 14.9218 10.1202C14.802 10.1413 14.6955 10.2093 14.6261 10.3093L13.4091 12.0677V8.80358ZM3.52273 4.20131L12.0516 8.46585L10 9.49176L1.47091 5.22722L3.52273 4.20131ZM0.909091 5.96267L9.54545 10.2809V18.8097L0.909091 14.4915V5.96267ZM10.4545 18.8099V10.2809L12.5 9.25813V13.5227C12.5 13.7215 12.6291 13.8972 12.8189 13.9565C12.8639 13.9706 12.9093 13.9772 12.9545 13.9772C13.1009 13.9772 13.2418 13.9063 13.3284 13.7815L15.1114 11.2063L16.327 12.0745C16.4657 12.1734 16.648 12.1868 16.7991 12.1086C16.9502 12.0309 17.0455 11.8747 17.0455 11.7045V6.9854L19.0909 5.96267V14.4915L10.4545 18.8099Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h1 className="tp-service-2__title-sm">Best Product</h1>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-xl-7 col-12">
                  <div className="tp-service-2__list-box-2">
                    <ul>
                      <li>
                        <i>
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00832 0.000488281C3.59271 0.000488281 0 3.58946 0 8.00049C0 12.4115 3.59271 16.0005 8.00832 16.0005C12.4239 16.0005 16.0166 12.4115 16.0166 8.00049C16.0166 3.58946 12.4239 0.000488281 8.00832 0.000488281ZM12.4841 5.89523L7.36605 10.9679C7.06499 11.2687 6.58328 11.2887 6.26215 10.988L3.55256 8.52179C3.23143 8.22104 3.21136 7.71979 3.49235 7.39899C3.79342 7.07818 4.29519 7.05813 4.61633 7.35889L6.76392 9.3238L11.3401 4.75237C11.6612 4.43157 12.163 4.43157 12.4841 4.75237C12.8053 5.07317 12.8053 5.57442 12.4841 5.89523Z"
                              fill="#7252F3"
                            />
                          </svg>
                        </i>
                        Free shipping on order above $200.
                      </li>
                      <li>
                        <i>
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00832 0.000488281C3.59271 0.000488281 0 3.58946 0 8.00049C0 12.4115 3.59271 16.0005 8.00832 16.0005C12.4239 16.0005 16.0166 12.4115 16.0166 8.00049C16.0166 3.58946 12.4239 0.000488281 8.00832 0.000488281ZM12.4841 5.89523L7.36605 10.9679C7.06499 11.2687 6.58328 11.2887 6.26215 10.988L3.55256 8.52179C3.23143 8.22104 3.21136 7.71979 3.49235 7.39899C3.79342 7.07818 4.29519 7.05813 4.61633 7.35889L6.76392 9.3238L11.3401 4.75237C11.6612 4.43157 12.163 4.43157 12.4841 4.75237C12.8053 5.07317 12.8053 5.57442 12.4841 5.89523Z"
                              fill="#7252F3"
                            />
                          </svg>
                        </i>
                        Contact us 24 hours a day, 7 days a week.
                      </li>
                      <li>
                        <i>
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00832 0.000488281C3.59271 0.000488281 0 3.58946 0 8.00049C0 12.4115 3.59271 16.0005 8.00832 16.0005C12.4239 16.0005 16.0166 12.4115 16.0166 8.00049C16.0166 3.58946 12.4239 0.000488281 8.00832 0.000488281ZM12.4841 5.89523L7.36605 10.9679C7.06499 11.2687 6.58328 11.2887 6.26215 10.988L3.55256 8.52179C3.23143 8.22104 3.21136 7.71979 3.49235 7.39899C3.79342 7.07818 4.29519 7.05813 4.61633 7.35889L6.76392 9.3238L11.3401 4.75237C11.6612 4.43157 12.163 4.43157 12.4841 4.75237C12.8053 5.07317 12.8053 5.57442 12.4841 5.89523Z"
                              fill="#7252F3"
                            />
                          </svg>
                        </i>
                        Simply return it within 30 days for an exchanges.
                      </li>
                      <li>
                        <i>
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00832 0.000488281C3.59271 0.000488281 0 3.58946 0 8.00049C0 12.4115 3.59271 16.0005 8.00832 16.0005C12.4239 16.0005 16.0166 12.4115 16.0166 8.00049C16.0166 3.58946 12.4239 0.000488281 8.00832 0.000488281ZM12.4841 5.89523L7.36605 10.9679C7.06499 11.2687 6.58328 11.2887 6.26215 10.988L3.55256 8.52179C3.23143 8.22104 3.21136 7.71979 3.49235 7.39899C3.79342 7.07818 4.29519 7.05813 4.61633 7.35889L6.76392 9.3238L11.3401 4.75237C11.6612 4.43157 12.163 4.43157 12.4841 4.75237C12.8053 5.07317 12.8053 5.57442 12.4841 5.89523Z"
                              fill="#7252F3"
                            />
                          </svg>
                        </i>
                        Payment secure.
                      </li>
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
                      <span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.23 4.13449V5.69449H5.85V9.59449H4.03V5.69449H0.65V4.13449H4.03V0.234488H5.85V4.13449H9.23Z"
                            fill="#336EF9"
                          />
                        </svg>
                      </span>
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