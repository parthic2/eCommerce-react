import React from 'react';
import { Link } from 'react-router-dom';
import shape1 from "../../Assets/img/hero/hero-shape-1-5.png";
import shape2 from "../../Assets/img/hero/hero-shape-1-7.png";
import shape3 from "../../Assets/img/hero/hero-shape-1-8.png";
import shape4 from "../../Assets/img/hero/hero-shape-1-6.png";
import shape5 from "../../Assets/img/hero/hero-shape-1-9.png";
import hero from "../../Assets/img/hero/hero-1.png";
import line from "../../Assets/img/svg/InnerLine.svg";

const Hero = () => {
  return (
    <div className="tp-hero__area z-index">
      <div className="tp-hero__bg tp-hero__height p-relative fix">
        <div className="tp-hero__shape-5 d-none d-xl-block">
          <img
            src={shape1}
            alt="shape"
            className="img-fluid"
            width="33"
            height="31"
          />
        </div>
        <div className="tp-hero__shape-7 d-none d-xl-block">
          <img
            src={shape2}
            alt="shape"
            className="img-fluid"
            width="20"
            height="18"
          />
        </div>
        <div className="tp-hero__shape-8">
          <img
            src={shape3}
            alt="shape"
            className="img-fluid"
            width="126"
            height="246"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero__left-box z-index">
                <div className="tp-hero__section-box">
                  <span
                    className="tp-hero-subtitle wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    Beats Solo Stylish Design
                  </span>
                  <h3
                    className="tp-hero-title wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <span className="p-relative">
                      20% Off {" "}
                      <span className="tp-title-shape">
                        <img src={line} alt="line" />
                      </span>
                    </span>
                    Beats
                    <br />
                    Solo Headphones
                  </h3>
                </div>
                <div
                  className="tp-hero__left-text wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do
                  </p>
                  <Link className="tp-main-btn" to="/Home3">
                    Let’s start — shop now
                    <i>
                      <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.6742 4.74002C17.3484 4.25133 16.8597 3.92554 16.2896 3.76264C15.0679 3.5183 13.9276 4.25133 13.6018 5.3916L12.8688 7.99794L5.78281 1.07486C4.96833 0.260384 3.66516 0.260384 2.93213 1.07486L2.85068 1.15631C2.60633 1.40065 2.52489 1.645 2.44344 1.97079C1.8733 1.88934 1.22172 2.13369 0.81448 2.54093C-0.081448 3.27396 -0.162896 4.57712 0.570136 5.3916L0.651584 5.47305L1.14027 6.04319C0.977376 6.12463 0.81448 6.20608 0.651584 6.36898C0.244344 6.77622 0 7.26491 0 7.83504C0 8.40518 0.244344 8.89386 0.570136 9.38255C5.04977 13.9436 6.67873 15.4097 7.08597 15.7355C7.9819 16.4685 9.36652 16.9572 10.6697 16.9572C11.4842 16.9572 12.2172 16.7943 12.9502 16.3056C14.3348 15.3282 15.4751 14.0251 16.0452 12.8034C16.2896 12.3961 16.6968 11.1744 17.9186 6.36898C18.0814 5.79884 18 5.22871 17.6742 4.74002ZM14.4163 12.2332C14.0091 13.2106 13.0317 14.2694 11.8914 15.0025C11.0769 15.5726 9.12217 15.2468 8.1448 14.4323C7.819 14.1065 6.19005 12.7219 1.79186 8.16083C1.71041 8.07938 1.62896 7.99794 1.62896 7.83504C1.62896 7.75359 1.71041 7.5907 1.79186 7.50925C1.95475 7.26491 2.28054 7.26491 2.52489 7.50925L5.04977 10.0341C5.21267 10.197 5.45701 10.2785 5.61991 10.2785H5.70136C5.86425 10.2785 6.1086 10.197 6.27149 9.95269C6.59728 9.62689 6.59728 9.13821 6.27149 8.81242L1.79186 4.25133C1.62896 4.08844 1.62896 3.84409 1.79186 3.76264C2.0362 3.5183 2.36199 3.5183 2.60633 3.76264L4.80543 5.88029L7.00453 8.07938C7.16742 8.24228 7.41176 8.32373 7.65611 8.32373C7.90045 8.32373 8.06335 8.24228 8.22624 8.07938C8.55204 7.75359 8.55204 7.26491 8.22624 6.93911L4.0724 2.86672C3.9095 2.70382 3.9095 2.37803 4.0724 2.13369C4.23529 1.97079 4.47964 1.97079 4.64253 2.13369L12.7059 10.0341C12.8688 10.197 13.0317 10.2785 13.276 10.2785C13.5204 10.2785 13.7647 10.197 13.8462 10.1156C14.0091 9.95269 14.009 9.87124 14.0905 9.70834V9.62689L15.1493 5.79884C15.2308 5.47305 15.5566 5.31016 15.8824 5.3916C16.0452 5.3916 16.1267 5.47305 16.2081 5.63595C16.2896 5.79884 16.2896 5.88029 16.2896 6.04319C15.1493 10.3599 14.6606 11.826 14.4163 12.2332ZM8.06335 1.56355C8.30769 1.645 8.47059 1.80789 8.71493 1.88934C8.95928 1.97079 9.12217 2.13369 9.36652 2.29658C9.69231 2.54093 10.0995 2.86672 10.4253 3.19251C10.7511 3.5183 11.0769 3.84409 11.3213 4.25133C11.4842 4.41423 11.7285 4.57712 11.9729 4.57712C12.1357 4.57712 12.2986 4.49568 12.3801 4.41423C12.7873 4.16988 12.8688 3.6812 12.6244 3.27396C12.2986 2.78527 11.9729 2.37803 11.5656 1.97079C11.1584 1.56355 10.7511 1.23776 10.2624 0.911967C10.0181 0.749072 9.77376 0.667624 9.52941 0.504728C9.20362 0.341832 8.95928 0.178936 8.71493 0.0974882C8.30769 -0.146856 7.819 0.0974882 7.65611 0.504728C7.41176 0.911967 7.65611 1.40065 8.06335 1.56355ZM4.96833 14.7581C4.72398 14.6767 4.47964 14.5138 4.31674 14.4323C4.0724 14.2694 3.9095 14.188 3.66516 14.0251C3.25792 13.6993 2.93213 13.3735 2.60633 13.0477C2.28054 12.7219 2.0362 12.3147 1.79186 11.9074C1.54751 11.5816 1.05882 11.4187 0.651584 11.6631C0.325792 11.9074 0.162896 12.3961 0.40724 12.8034C0.733032 13.2921 1.05882 13.7807 1.46606 14.188C1.8733 14.5952 2.28054 15.0025 2.76923 15.3282L3.50226 15.8169C3.50226 15.8169 3.99095 16.0613 4.23529 16.2242C4.31674 16.3056 4.47964 16.3056 4.56109 16.3056C4.88688 16.3056 5.13122 16.1427 5.37557 15.8169C5.53846 15.4097 5.37557 14.921 4.96833 14.7581Z"
                          fill="url(#paint0_linear_82_98)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_82_98"
                            x1="0"
                            y1="8.47848"
                            x2="18"
                            y2="8.47848"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#EE0979" />
                            <stop offset="1" stopColor="#FF6A00" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div
                className="tp-hero__thumb-box p-relative text-center text-lg-end"
              >
                <img
                  src={hero}
                  alt="hero banner"
                  className="img-fluid"
                  width="501"
                  height="472"
                />
                <div className="tp-hero__shape-6 d-none d-md-block">
                  <img
                    src={shape4}
                    alt="shape"
                    className="img-fluid"
                    width="41"
                    height="42"
                  />
                </div>
                <div className="tp-hero__shape-9">
                  <img
                    src={shape5}
                    alt="shape"
                    className="img-fluid"
                    width="355"
                    height="355"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;