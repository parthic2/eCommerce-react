import React from 'react';
import { Link } from 'react-router-dom';
import scan from "../../../Assets/img/footer/thumb-sm.png";
import appStore from "../../../Assets/img/footer/thumb-sm-2.png";
import gPlay from "../../../Assets/img/footer/thumb-sm-3.png";
import card from "../../../Assets/img/footer/thumb-sm-4.png";
import CopyRight from './CopyRight';
import { featureItems } from '../../../Data/Data';
import { EmailLogo } from '../../../svg/svg';

const Footer = () => {
  return (
    <footer className="bg-shadow">
      <div className="tp-footer-4-top__area pt-65">
        <div className="container custom-container-3">
          <div className="tp-footer-4-top__border">
            <div className="row">
              {featureItems.map((item, index) => (
                <div
                  key={index}
                  className={`col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30 wow tpfadeUp`}
                  data-wow-duration=".9s"
                  data-wow-delay={`.${3 + 2 * index}s`}
                >
                  <div className={`tp-footer-4-top__item item-border-${index + 1}`}>
                    <div className="tp-feature-3__item d-flex align-items-center">
                      <div className="tp-feature-3__icon">
                        <span>{item.icon}</span>
                      </div>
                      <div className="tp-feature-3__text">
                        <h1>{item.title}</h1>
                        <span>{item.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="tp-footer-4__area pt-65 mb-55">
        <div className="container custom-container-3">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-footer-4__widget footer-col-9">
                <div className="tp-footer-4__logo">
                  <a href="index2.html" aria-label="E-Solution">
                    eSolution
                  </a>
                </div>
                <div className="tp-footer-4__text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="tp-footer__form">
                  <form action="#">
                    <input type="email" placeholder="Email Address" />
                  </form>
                  <span className="tp-footer__input-icon">
                    <EmailLogo />
                  </span>
                  <button>
                    <span>
                      <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 15L8 8L1 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="tp-footer-4__comment-agree">
                  <div className="form-check-box">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-theme"
                      htmlFor="flexCheckDefault"
                    >
                      By subscribing, you accepted the our Policy
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-footer-4__widget footer-col-10">
                <h4 className="tp-footer-4__widget-title text-black">Our office</h4>
                <div className="tp-footer-4__list">
                  <ul>
                    <li><Link to="/">Newsletter & Blog</Link></li>
                    <li><Link to="/">Career & Contact</Link></li>
                    <li><Link to="/">Monthly Offer</Link></li>
                    <li><Link to="/">Affiliate Program</Link></li>
                    <li><Link to="/">Referral Programs</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-footer-4__widget footer-col-11">
                <h4 className="tp-footer-4__widget-title text-black">
                  Find It Fast
                </h4>
                <div className="tp-footer-4__list">
                  <ul>
                    <li><Link to="/">Flexographic Printing.</Link></li>
                    <li><Link to="/">Computer & Laptop</Link></li>
                    <li><Link to="/">Surface Printing.</Link></li>
                    <li><Link to="/">Brochure & Home gift</Link></li>
                    <li><Link to="/">Digital Printing.</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-footer-4__widget footer-col-12">
                <h4 className="tp-footer-4__widget-title text-black">
                  Download App
                </h4>
                <div
                  className="tp-footer-4__top-box d-flex align-items-center mb-25"
                >
                  <div className="tp-footer-4__top-left">
                    <Link to="/">
                      <img
                        src={scan}
                        alt="thumb"
                        className="img-fluid"
                        width="105"
                        height="104"
                      />
                    </Link>
                  </div>
                  <div className="tp-footer-4__top-right">
                    <Link to="/">
                      <img
                        src={appStore}
                        alt="thumb"
                        className="img-fluid"
                        width="151"
                        height="40"
                      />
                    </Link>
                    <Link to="/">
                      <img
                        src={gPlay}
                        alt="thumb"
                        className="img-fluid"
                        width="151"
                        height="40"
                      />
                    </Link>
                  </div>
                </div>
                <div className="tp-footer-4__thumb">
                  <span>We Accepted:</span>
                  <Link to="/">
                    <img
                      src={card}
                      alt="thumb"
                      className="img-fluid"
                      width="291"
                      height="25"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CopyRight />
    </footer>
  )
}

export default Footer;