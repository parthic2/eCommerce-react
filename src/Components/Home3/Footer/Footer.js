import React from 'react';
import { Link } from 'react-router-dom';
import shape from "../../../Assets/img/footer/shape-1-1.png";
import card from "../../../Assets/img/footer/footer-1-1.png";

const Footer = () => {
  return (
    <footer>
      <div className="tp-footer__area p-relative tp-footer__space grey-bg">
        <div className="tp-footer__shape d-none d-lg-block">
          <img
            src={shape}
            alt="shape"
            className="img-fluid"
            width="20"
            height="18"
          />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-footer__widget z-index footer-col-1">
                <div className="tp-footer__logo">
                  <Link to="/Home3" aria-label="E-Solution">
                    eSolution
                  </Link>
                </div>
                <div className="tp-footer__text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam suscipit.
                  </p>
                </div>
                <div className="tp-footer__contact-list">
                  <div
                    className="tp-footer__contact-item pb-10 d-flex about-items-center"
                  >
                    <div className="tp-footer__icon">
                      <span>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.08443 4.77045L8.84597 6.13502C9.53323 7.36647 9.25734 8.98192 8.17492 10.0643C8.17492 10.0643 8.17492 10.0643 8.17492 10.0643C8.1748 10.0645 6.86209 11.3774 9.24247 13.7578C11.6222 16.1375 12.9351 14.8262 12.9359 14.8254C12.936 14.8253 12.9359 14.8253 12.936 14.8253C14.0184 13.7429 15.6338 13.467 16.8653 14.1543L18.2298 14.9158C20.0893 15.9536 20.3089 18.5614 18.6745 20.1958C17.6923 21.178 16.4892 21.9422 15.1592 21.9926C12.9202 22.0775 9.11782 21.5108 5.30364 17.6966C1.48945 13.8824 0.922808 10.0801 1.00769 7.84111C1.05811 6.51109 1.82231 5.30794 2.80444 4.32581C4.43891 2.69134 7.04667 2.91095 8.08443 4.77045Z"
                            stroke="#735CFC"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M11.8646 0.739036C11.9423 0.25925 12.3959 -0.0662177 12.8757 0.0114575C12.9054 0.0171423 13.0009 0.0350017 13.051 0.046152C13.1511 0.0684501 13.2908 0.102781 13.4649 0.153502C13.8132 0.254933 14.2996 0.422028 14.8835 0.689721C16.0526 1.22567 17.6083 2.16321 19.2226 3.77756C20.8369 5.3919 21.7745 6.9476 22.3104 8.11662C22.5781 8.70051 22.7452 9.187 22.8467 9.53524C22.8974 9.70938 22.9317 9.84904 22.954 9.94917C22.9652 9.99923 22.9733 10.0394 22.979 10.0691L22.9857 10.1057C23.0634 10.5855 22.7409 11.0578 22.2611 11.1355C21.7827 11.213 21.332 10.8891 21.2524 10.4115C21.25 10.3987 21.2432 10.3643 21.236 10.3318C21.2215 10.2668 21.1965 10.1637 21.1568 10.0274C21.0774 9.75482 20.9395 9.34961 20.7105 8.85013C20.2531 7.85239 19.4305 6.47462 17.978 5.02212C16.5255 3.56963 15.1478 2.74709 14.15 2.28967C13.6505 2.06068 13.2453 1.92277 12.9727 1.84336C12.8364 1.80366 12.6651 1.76434 12.6001 1.74987C12.1226 1.67029 11.7872 1.21745 11.8646 0.739036Z"
                            fill="#735CFC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.1301 4.78659C12.2636 4.31926 12.7507 4.04866 13.2181 4.18218L12.9763 5.02836C13.2181 4.18218 13.2181 4.18218 13.2181 4.18218L13.2198 4.18266L13.2216 4.18318L13.2255 4.18433L13.2346 4.18704L13.2578 4.19427C13.2755 4.19993 13.2976 4.2073 13.3239 4.21665C13.3766 4.23535 13.4463 4.26194 13.5317 4.29856C13.7026 4.37182 13.9362 4.48496 14.2231 4.65476C14.7975 4.99467 15.5815 5.55928 16.5026 6.48035C17.4236 7.40143 17.9883 8.18547 18.3282 8.7598C18.498 9.04671 18.6111 9.28029 18.6844 9.45123C18.721 9.53666 18.7476 9.60631 18.7663 9.65901C18.7756 9.68535 18.783 9.70745 18.7887 9.72514L18.7959 9.74836L18.7986 9.75745L18.7997 9.76137L18.8003 9.76316C18.8003 9.76316 18.8007 9.76485 17.9546 10.0066L18.8007 9.76485C18.9343 10.2322 18.6637 10.7193 18.1963 10.8528C17.733 10.9852 17.2502 10.7203 17.1119 10.2602L17.1075 10.2476C17.1013 10.23 17.0883 10.1953 17.0666 10.1446C17.0232 10.0433 16.9445 9.87754 16.8135 9.65625C16.5519 9.21418 16.0793 8.54623 15.258 7.72492C14.4367 6.9036 13.7687 6.43107 13.3267 6.16944C13.1054 6.03847 12.9397 5.95974 12.8384 5.91633C12.7877 5.8946 12.753 5.88165 12.7353 5.8754L12.7227 5.87106C12.2626 5.73274 11.9977 5.24996 12.1301 4.78659Z"
                            fill="#735CFC"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="tp-footer__text">
                      <Link to="/Home3">+890 (000) 66 59</Link>
                    </div>
                  </div>
                  <div
                    className="tp-footer__contact-item d-flex about-items-center"
                  >
                    <div className="tp-footer__icon">
                      <span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 12.5997 1.37562 14.1116 2.04346 15.4525C2.22094 15.8088 2.28001 16.2161 2.17712 16.6006L1.58151 18.8267C1.32295 19.793 2.20701 20.677 3.17335 20.4185L5.39939 19.8229C5.78393 19.72 6.19121 19.7791 6.54753 19.9565C7.88836 20.6244 9.40032 21 11 21Z"
                            stroke="#735CFC"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6.825 11.8495C6.36937 11.8495 6 12.2189 6 12.6745C6 13.1301 6.36937 13.4995 6.825 13.4995H12.875C13.3306 13.4995 13.7 13.1301 13.7 12.6745C13.7 12.2189 13.3306 11.8495 12.875 11.8495H6.825Z"
                            fill="#735CFC"
                          />
                          <path
                            d="M6.825 7.99951C6.36937 7.99951 6 8.36888 6 8.82451C6 9.28015 6.36937 9.64951 6.825 9.64951H15.625C16.0806 9.64951 16.45 9.28015 16.45 8.82451C16.45 8.36888 16.0806 7.99951 15.625 7.99951H6.825Z"
                            fill="#735CFC"
                          />
                        </svg>
                      </span>
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
            <div
              className="col-xl-2 col-lg-2 col-md-6 col-sm-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
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
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
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
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-footer__widget footer-col-4">
                <h4 className="tp-footer__widget-title">Our Newsletter</h4>
                <div className="tp-footer__form">
                  <form action="#">
                    <input type="email" placeholder="Email Address" />
                  </form>
                  <span className="tp-footer__input-icon">
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
                  <button>
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.75586 13.2432L13.2411 4.75788"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.75586 4.75781H13.2411V13.2431"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="tp-footer__thumb">
                  <span>We Accepted:</span>
                  <Link to="/Home3">
                    <img
                      src={card}
                      alt="card"
                      className="img-fluid"
                      width="273"
                      height="27"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-copyright__area grey-bg tp-copyright__border">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className="tp-copyright__wrapper d-flex align-items-center justify-content-sm-between justify-content-center"
              >
                <div className="tp-copyright__social-box d-none d-lg-block">
                  <Link to="/Home3"><i className="fa-brands fa-facebook-f"></i></Link>
                  <Link to="/Home3"><i className="fa-brands fa-vimeo-v"></i></Link>
                  <Link to="/Home3"><i className="fa-brands fa-twitter"></i></Link>
                  <Link to="/Home3"><i className="fa-brands fa-linkedin-in"></i></Link>
                </div>
                <div className="tp-copyright__text text-center">
                  <span>Full Copyright & Design By <i>@abc</i> – 2023</span>
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
