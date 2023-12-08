import React from 'react';
import { Link } from 'react-router-dom';
import shape from "../../../Assets/img/footer/shape-1-1.png";
import card from "../../../Assets/img/footer/footer-1-1.png";
import CopyRight from './CopyRight';
import { Call, EmailLogo, Mail, UpArrow } from '../../../svg/svg';

const Footer = () => {
  return (
    <footer>
      <div className="tp-footer__area p-relative tp-footer__space grey-bg">
        <div className="tp-footer__shape d-none d-lg-block">
          <img src={shape} alt="shape" className="img-fluid" width="20" height="18" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="tp-footer__widget z-index footer-col-1">
                <div className="tp-footer__logo">
                  <Link to="/Home3" aria-label="E-Solution">
                    eSolution
                  </Link>
                </div>
                <div className="tp-footer__text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam suscipit.</p>
                </div>
                <div className="tp-footer__contact-list">
                  <div className="tp-footer__contact-item pb-10 d-flex about-items-center">
                    <div className="tp-footer__icon">
                      <span><Call /></span>
                    </div>
                    <div className="tp-footer__text">
                      <Link to="/Home3">+890 (000) 66 59</Link>
                    </div>
                  </div>
                  <div className="tp-footer__contact-item d-flex about-items-center">
                    <div className="tp-footer__icon">
                      <span><Mail /></span>
                    </div>
                    <div className="tp-footer__text">
                      <Link to="/Home3">
                        <span>contact@info.com</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 mb-30">
              <div className="tp-footer__widget footer-col-2">
                <h4 className="tp-footer__widget-title">Navigation</h4>
                <div className="tp-footer__list">
                  <ul>
                    <li><Link to="/Home3">Demo page</Link></li>
                    <li><Link to="/Home3">About</Link></li>
                    <li><Link to="/Home3">Pricing Plan</Link></li>
                    <li><Link to="/Home3">Integrations</Link></li>
                    <li><Link to="/Home3">Blog</Link></li>
                    <li><Link to="/Home3">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="tp-footer__widget footer-col-3">
                <h4 className="tp-footer__widget-title">Other Pages</h4>
                <div className="tp-footer__list">
                  <ul>
                    <li><Link to="/Home3">Features</Link></li>
                    <li><Link to="/Home3">Team Member</Link></li>
                    <li><Link to="/Home3">Our Careers</Link></li>
                    <li><Link to="/Home3">Login Here</Link></li>
                    <li><Link to="/Home3">Register</Link></li>
                    <li><Link to="/Home3">404 Not found</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="tp-footer__widget footer-col-4">
                <h4 className="tp-footer__widget-title">Our Newsletter</h4>
                <div className="tp-footer__form">
                  <form action="#">
                    <input type="email" placeholder="Email Address" />
                  </form>
                  <span className="tp-footer__input-icon">
                    <EmailLogo />
                  </span>
                  <button>
                    <span><UpArrow /></span>
                  </button>
                </div>
                <div className="tp-footer__thumb">
                  <span>We Accepted:</span>
                  <Link to="/Home3">
                    <img src={card} alt="card" className="img-fluid" width="273" height="27" />
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