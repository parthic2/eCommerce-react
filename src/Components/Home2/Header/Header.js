import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import home1 from "../../../Assets/img/menu/home-1.png";
import home2 from "../../../Assets/img/menu/home-2.png";
import home3 from "../../../Assets/img/menu/home-3.png";

const Header = () => {
  const [, setScroll] = useState(window.scrollY);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newScroll = window.scrollY;
      setScroll(newScroll);

      const headerSticky = document.getElementById('header-sticky');

      if (newScroll < 100) {
        // Remove the "header-sticky" class
        setIsHeaderSticky(false);
        // Remove
        headerSticky.style.display = 'block';
      } else {
        // Add the "header-sticky" class
        setIsHeaderSticky(true);
        // Add
        headerSticky.style.display = "block";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="tp-header-height">
      <div
        id="header-sticky"
        className={isHeaderSticky ? 'header-sticky' : 'tp-header-2__area'}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-6 col-md-4 col-6">
              <div
                className="tp-header-2__logo-3-box z-index-9 d-none d-xl-block p-relative"
              >
                <Link to="/Home2" aria-label="E-Solution">
                  <div className="tp-header-2__logo-3 z-index">
                    eSolution
                    {/* <!-- <img
                      src="assets/img/logo/logo-2.png"
                      alt="logo"
                      className="img-fluid"
                      width="110"
                      height="24"
                    > --> */}
                  </div>
                  <span>
                    <svg
                      width="156"
                      height="133"
                      viewBox="0 0 156 133"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H156V124.793C156 129.655 151.698 133.393 146.883 132.714L6.88286 112.971C2.93527 112.414 0 109.036 0 105.049V0Z"
                        fill="#735CFC"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="tp-header-3__logo d-xl-none">
                <Link to="/Home2" aria-label="E-Solution">
                  eSolution
                  {/* <!-- <img
                    src="assets/img/logo/logo.png"
                    alt="logo"
                    className="img-fluid"
                    width="110"
                    height="24"
                  > --> */}
                </Link>
              </div>
            </div>
            <div className="col-xl-6 d-none d-xl-block text-center">
              <div
                className="tp-header-2__main-menu tp-header__main-menu tp-header-2__main-menu-3"
              >
                <nav className="tp-main-menu-content">
                  <ul>
                    <li className="has-dropdown">
                      <Link to="/Home2">Home</Link>
                      <div className="tp-submenu submenu has-homemenu">
                        <div
                          className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-3"
                        >
                          <div className="col homemenu">
                            <div className="homemenu-thumb mb-15">
                              <Link to="/">
                                <img
                                  src={home1}
                                  alt="home banner"
                                  className="img-fluid"
                                  width="159"
                                  height="188"
                                />
                              </Link>
                              <div className="homemenu-btn">
                                <Link className="tp-menu-btn" to="/">View Demo</Link>
                              </div>
                            </div>
                            <div className="homemenu-content text-center">
                              <h4 className="homemenu-title">
                                <Link to="/">Home 01</Link>
                              </h4>
                            </div>
                          </div>
                          <div className="col homemenu">
                            <div className="homemenu-thumb mb-15">
                              <Link to="/Home2">
                                <img
                                  src={home2}
                                  alt="home banner"
                                  className="img-fluid"
                                  width="159"
                                  height="188"
                                />
                              </Link>
                              <div className="homemenu-btn">
                                <Link className="tp-menu-btn" to="/Home2">View Demo</Link>
                              </div>
                            </div>
                            <div className="homemenu-content text-center">
                              <h4 className="homemenu-title">
                                <Link to="/Home2">Home 02</Link>
                              </h4>
                            </div>
                          </div>
                          <div className="col homemenu">
                            <div className="homemenu-thumb mb-15">
                              <Link to="/Home3">
                                <img
                                  src={home3}
                                  alt="home banner"
                                  className="img-fluid"
                                  width="159"
                                  height="188"
                                />
                              </Link>
                              <div className="homemenu-btn">
                                <Link className="tp-menu-btn" to="/Home3">View Demo</Link>
                              </div>
                            </div>
                            <div className="homemenu-content text-center">
                              <h4 className="homemenu-title">
                                <Link to="/Home3">Home 03</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/Service">services</Link>
                    </li>
                    <li>
                      <Link to="/About">about</Link>
                    </li>
                    <li>
                      <Link to="/Contact">contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-8 col-6">
              <div className="tp-header-2__right-box text-end">
                <ul className="d-flex justify-content-end align-items-center">
                  <li>
                    <div className="tp-header-2__icon-box d-none d-md-block">
                      <Link to="/Home2" aria-label="User">
                        <span>

                        </span>
                      </Link>
                      <Link to="/" aria-label="Heart">
                        <span className="heart p-relative">
                          <i className="fa-light fa-heart"></i>
                          <b className="tp-header__icon-text">0</b>
                        </span>
                      </Link>
                      <Link to="/" aria-label="Add To Cart">
                        <span className="cart p-relative">
                          <svg
                            width="22"
                            height="21"
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.0291 4.48689C20.908 4.3131 20.7132 4.20567 20.5016 4.19661L7.38131 3.63019C7.00487 3.61369 6.69029 3.90477 6.6742 4.28005C6.6582 4.65519 6.94835 4.97216 7.323 4.98827L19.555 5.5164L17.1499 13.0321H6.44709L4.51346 2.48719C4.47096 2.25608 4.31253 2.06327 4.09404 1.97742L0.927085 0.731306C0.578047 0.59444 0.184184 0.76615 0.0471052 1.11531C-0.0897364 1.46465 0.0816588 1.85937 0.430508 1.99666L3.24643 3.10463L5.21419 13.8346C5.2735 14.1572 5.55419 14.3915 5.88178 14.3915H6.2082L5.46283 16.4651C5.40045 16.6388 5.42615 16.8317 5.53232 16.9826C5.63835 17.1335 5.81078 17.2233 5.99486 17.2233H6.51766C6.19371 17.5844 5.99486 18.0599 5.99486 18.5827C5.99486 19.7072 6.90836 20.6218 8.03078 20.6218C9.1532 20.6218 10.0667 19.7072 10.0667 18.5827C10.0667 18.0599 9.86784 17.5844 9.54394 17.2233H13.9827C13.6587 17.5844 13.4599 18.0599 13.4599 18.5827C13.4599 19.7072 14.3731 20.6218 15.4958 20.6218C16.6185 20.6218 17.5317 19.7072 17.5317 18.5827C17.5317 18.0599 17.3329 17.5844 17.009 17.2233H17.6448C17.9572 17.2233 18.2104 16.9697 18.2104 16.657C18.2104 16.3441 17.9572 16.0905 17.6448 16.0905H6.79954L7.41023 14.3913H17.6448C17.9399 14.3913 18.201 14.2003 18.2909 13.9191L21.1186 5.08295C21.1835 4.88128 21.1502 4.66078 21.0291 4.48689ZM8.03083 19.4892C7.53179 19.4892 7.12595 19.0828 7.12595 18.583C7.12595 18.0832 7.53179 17.6767 8.03083 17.6767C8.52986 17.6767 8.93566 18.0832 8.93566 18.583C8.93566 19.0828 8.52986 19.4892 8.03083 19.4892ZM15.4958 19.4892C14.9967 19.4892 14.5909 19.0828 14.5909 18.583C14.5909 18.0832 14.9967 17.6767 15.4958 17.6767C15.9948 17.6767 16.4006 18.0832 16.4006 18.583C16.4006 19.0828 15.9948 19.4892 15.4958 19.4892Z"
                              fill="#020626"
                            />
                          </svg>
                          <b className="tp-header__icon-text">0</b>
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="tp-header__chat-box">
                      <Link to="/Home2" aria-label="let's talk">
                        Let,s Talk
                        <span>
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_37_410)">
                              <path
                                d="M21.5648 16.6095C23.7874 13.4911 23.4476 9.21882 20.4119 6.43587C19.0249 5.16435 17.2566 4.37279 15.3465 4.15172C15.3346 4.13708 15.3224 4.12257 15.3091 4.10869C13.6474 2.38257 11.26 1.39258 8.75923 1.39258C4.00025 1.39258 0 4.9384 0 9.47852C0 11.0703 0.494455 12.5963 1.43373 13.9141L0.121604 18.0338C0.039127 18.2927 0.120256 18.5757 0.327301 18.7517C0.534705 18.928 0.827281 18.9618 1.06901 18.8389L5.05928 16.8099C5.87875 17.1628 6.74772 17.3943 7.64759 17.4996C9.38346 19.3251 11.7837 20.2598 14.2393 20.2598C15.5158 20.2598 16.7877 19.9996 17.9391 19.5052L21.9296 21.5342C22.0262 21.5834 22.1308 21.6074 22.2348 21.6074C22.6895 21.6074 23.0155 21.1643 22.877 20.7291L21.5648 16.6095ZM5.33124 15.4541C5.14252 15.3644 4.92299 15.3674 4.73679 15.4621L1.89472 16.9072L2.8228 13.9933C2.89036 13.7812 2.84881 13.5494 2.71171 13.374C1.81929 12.2316 1.34757 10.8846 1.34757 9.47852C1.34757 5.76303 4.67241 2.74023 8.75923 2.74023C10.405 2.74023 11.9893 3.23882 13.2745 4.13668C8.94637 4.57188 5.48011 7.95243 5.48011 12.1738C5.48011 13.4868 5.81666 14.7508 6.45119 15.8833C6.06701 15.7689 5.69286 15.6258 5.33124 15.4541ZM18.2618 18.1574C18.0783 18.0641 17.8586 18.0585 17.6673 18.1494C16.6168 18.6484 15.4315 18.9121 14.2393 18.9121C10.1525 18.9121 6.82768 15.8893 6.82768 12.1738C6.82768 8.45834 10.1525 5.43555 14.2393 5.43555C18.3262 5.43555 21.651 8.45834 21.651 12.1738C21.651 13.5799 21.1793 14.9269 20.2868 16.0692C20.1498 16.2446 20.1082 16.4764 20.1757 16.6886L21.1038 19.6025L18.2618 18.1574Z"
                                fill="white"
                              />
                              <path
                                d="M11.4993 12.8477C11.8714 12.8477 12.1731 12.546 12.1731 12.1738C12.1731 11.8017 11.8714 11.5 11.4993 11.5C11.1271 11.5 10.8254 11.8017 10.8254 12.1738C10.8254 12.546 11.1271 12.8477 11.4993 12.8477Z"
                                fill="white"
                              />
                              <path
                                d="M14.1943 12.8477C14.5665 12.8477 14.8682 12.546 14.8682 12.1738C14.8682 11.8017 14.5665 11.5 14.1943 11.5C13.8222 11.5 13.5205 11.8017 13.5205 12.1738C13.5205 12.546 13.8222 12.8477 14.1943 12.8477Z"
                                fill="white"
                              />
                              <path
                                d="M16.8896 12.8477C17.2618 12.8477 17.5635 12.546 17.5635 12.1738C17.5635 11.8017 17.2618 11.5 16.8896 11.5C16.5175 11.5 16.2158 11.8017 16.2158 12.1738C16.2158 12.546 16.5175 12.8477 16.8896 12.8477Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_37_410">
                                <rect width="23" height="23" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="d-xl-none">
                    <div className="tp-header-2__bar">
                      <button className="tp-menu-bar" aria-label="menu">
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;