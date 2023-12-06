import React from 'react';
import { Link } from 'react-router-dom';
import card from "../../../Assets/img/footer/footer-2-1.png";

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
                    We look forward to <br />
                    hearing from you.
                  </h1>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="tp-footer-2__form">
                  <form action="#">
                    <input type="email" placeholder="Enter your e-mail" />
                  </form>
                  <span className="tp-footer-2__input-icon">
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 7.4C17 10.417 17 11.9255 16.0627 12.8627C15.1255 13.8 13.617 13.8 10.6 13.8H7.4C4.38301 13.8 2.87452 13.8 1.93726 12.8627C1 11.9255 1 10.417 1 7.4C1 4.38301 1 2.87452 1.93726 1.93726C2.87452 1 4.38301 1 7.4 1H10.6C13.617 1 15.1255 1 16.0627 1.93726C16.5853 2.4598 16.8165 3.15991 16.9188 4.2"
                        stroke="#82868C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13.7995 4.19922L12.0723 5.63848C10.603 6.86291 9.86838 7.47512 8.99946 7.47512C8.48002 7.47512 8.00857 7.25634 7.39946 6.81877M4.19946 4.19922L4.91946 4.79922L5.63946 5.39922"
                        stroke="#82868C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <button className="tp-btn-sm">subscribe us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-2__ptb">
            <div className="row">
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-footer-2__widget footer-col-5">
                  <div className="tp-footer-2__logo">
                    <Link to="/Home2" aria-label="E-Solution">
                      eSolution
                      {/* <!-- <img src="assets/img/logo/white-logo.png" alt="logo" className="img-fluid"> --> */}
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
                    <Link to="/Home2" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link to="/Home2" aria-label="Vimeo"><i className="fa-brands fa-vimeo-v"></i></Link>
                    <Link to="/Home2" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="/Home2" aria-label="Linkedin"><i className="fa-brands fa-linkedin-in"></i></Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
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
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
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
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="tp-footer-2__widget footer-col-8">
                  <h1 className="tp-footer-2__widget-title">Our Location</h1>
                  <div className="tp-footer-2__location">
                    <iframe
                      width="600"
                      height="450"
                      title="map"
                      style={{ border: "0" }}
                      loading="lazy"
                      allowFullScreen=""
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(vnsgu)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                  <div className="tp-footer-2__text">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_663_463)">
                        <path
                          d="M2.11762 9.26621C2.11762 9.26621 2.90778 10.369 4.56387 11.3024C4.56387 11.3024 3.36446 1.67248 11.1794 0C9.17719 6.98105 13.7263 8.94982 15.3845 5.26159C18.1538 8.77403 16.0512 11.8384 16.0512 11.8384C17.1867 11.9939 18.1405 10.8153 18.1405 10.8153C18.149 10.9605 18.1538 11.1067 18.1538 11.2539C18.1538 15.5319 14.5032 19 10 19C5.49676 19 1.84618 15.5319 1.84618 11.2539C1.84618 10.5667 1.94086 9.90056 2.11762 9.26621Z"
                          fill="#FF6536"
                        />
                        <path
                          d="M18.1405 10.8153C18.1405 10.8153 17.1867 11.9939 16.0512 11.8384C16.0512 11.8384 18.1538 8.77403 15.3846 5.26159C13.7263 8.94982 9.17723 6.98105 11.1795 0C10.7609 0.089582 10.3684 0.202135 10 0.334652V19C14.5032 19 18.1538 15.5319 18.1538 11.2539C18.1538 11.1067 18.1491 10.9605 18.1405 10.8153Z"
                          fill="#FF421D"
                        />
                        <path
                          d="M6.42406 15.6029C6.42406 17.4791 8.02507 19.0001 9.99999 19.0001C11.9749 19.0001 13.5759 17.4791 13.5759 15.6029C13.5759 14.5987 13.1173 13.6963 12.3881 13.0744C11.0055 14.8588 9.03531 12.152 10.5708 10.1753C10.5708 10.1753 6.42406 10.669 6.42406 15.6029Z"
                          fill="#FBBF00"
                        />
                        <path
                          d="M13.5759 15.6029C13.5759 14.5987 13.1173 13.6963 12.3881 13.0744C11.0055 14.8588 9.03531 12.152 10.5708 10.1753C10.5708 10.1753 10.3455 10.2022 10 10.3058V19.0001C11.9749 19.0001 13.5759 17.4791 13.5759 15.6029Z"
                          fill="#FFA900"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_663_463">
                          <rect width="20" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>
                      We provide fast on-demand {" "}
                      <strong>printing.</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-copyright-2__area black-bg-2">
        <div className="container">
          <div className="tp-copyright-2__bdr">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-copyright-2__text text-center text-md-start">
                  <span>
                    <strong>© 2023</strong> Powered by ABC . All Rights
                    Reserved.
                  </span>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-copyright-2__thumb text-end d-none d-md-block">
                  <Link to="/Home2">
                    <img
                      src={card}
                      alt="card"
                      className="img-fluid"
                      width="333"
                      height="28"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;