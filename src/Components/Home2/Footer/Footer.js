import React from 'react';
import { Link } from 'react-router-dom';
import CopyRight from './CopyRight';
import MapSection from './MapSection';
import { EmailLogo } from '../../../svg/svg';
import logo from "../../../Assets/img/menu/logo-white.svg";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaVimeoV } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <div className="tp-footer-2__area tp-footer-2__bg pt-120">
        <div className="container">
          <div className="tp-footer-2__border p-relative">
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-6">
                <div className="tp-footer-2__top-box">
                  <h1 className="tp-footer-2__top-title">
                    We look forward to <br /> hearing from you.
                  </h1>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="tp-footer-2__form">
                  <form action="#">
                    <input type="email" placeholder="Enter your e-mail" />
                  </form>
                  <span className="tp-footer-2__input-icon">
                    <EmailLogo />
                  </span>
                  <button className="tp-btn-sm">subscribe us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-2__ptb">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp" data-wow-duration=".9s"
                data-wow-delay=".3s">
                <div className="tp-footer-2__widget footer-col-5">
                  <div className="tp-footer-2__logo">
                    <Link to="/Home2" aria-label="E-Solution">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="tp-footer-2__text">
                    <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                  </div>
                  <div className="tp-footer-2__contact-list">
                    <Link to="/Home2"> <span>Contact@info.com</span></Link>
                    <Link to="/Home2">+ (445) 523-0134</Link>
                  </div>
                  <div className="tp-footer-2__social-box">
                    <Link to="https://facebook.com/" aria-label="Facebook"><FaFacebookF /></Link>
                    <Link to="https://vimeo.com/" aria-label="Vimeo"><FaVimeoV /></Link>
                    <Link to="https://twitter.com/" aria-label="Twitter"><FaTwitter /></Link>
                    <Link to="https://linkedin.com/" aria-label="Linkedin"><FaLinkedinIn /></Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp" data-wow-duration=".9s"
                data-wow-delay=".5s">
                <div className="tp-footer-2__widget footer-col-6">
                  <h1 className="tp-footer-2__widget-title">Our office</h1>
                  <div className="tp-footer-2__list">
                    <ul>
                      <li><Link to="/Home2">Newslatter & Blog</Link></li>
                      <li><Link to="/Home2">Carrer & Contact</Link></li>
                      <li><Link to="/Home2">Monthly Offer</Link></li>
                      <li><Link to="/Home2">Affiliate Program</Link></li>
                      <li><Link to="/Home2">Referrel Programms</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp" data-wow-duration=".9s"
                data-wow-delay=".7s">
                <div className="tp-footer-2__widget footer-col-7">
                  <h1 className="tp-footer-2__widget-title">Find It Fast</h1>
                  <div className="tp-footer-2__list">
                    <ul>
                      <li><Link to="/Home2">Flexographic Printing.</Link></li>
                      <li><Link to="/Home2">Computer & Laptop</Link></li>
                      <li><Link to="/Home2">Surface Printing.</Link></li>
                      <li><Link to="/Home2">Brochure & Home gift</Link></li>
                      <li><Link to="/Home2">Digital Printing.</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp" data-wow-duration=".9s"
                data-wow-delay=".9s">
                <MapSection />
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