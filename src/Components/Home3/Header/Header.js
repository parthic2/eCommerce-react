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
        headerSticky.style.borderRadius = '0';
        headerSticky.style.margin = '0';
      } else {
        // Add the "header-sticky" class
        setIsHeaderSticky(true);
        // Add
        headerSticky.style.display = "block";
        headerSticky.style.borderRadius = "50px";
        headerSticky.style.margin = "1%";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="tp-header-height">
      <div id="header-sticky" className={isHeaderSticky ? 'header-sticky' : 'tp-header__area'}>
        <div className="tp-header__transparent">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="tp-header__left-box d-flex align-items-center">
                  <div className="tp-header__logo">
                    <Link to="/Home3" aria-label="E-Solution">
                      eSolution
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block text-center">
                <div className="tp-header__main-menu">
                  <nav className="tp-main-menu-content">
                    <ul>
                      <li className="has-dropdown">
                        <Link to="/Home3">Home</Link>
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
                                  <Link className="tp-menu-btn" to="/">
                                    View Demo
                                  </Link>
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
                                  <Link className="tp-menu-btn" to="/Home2">
                                    View Demo
                                  </Link>
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
                                  <Link className="tp-menu-btn" to="/Home3">
                                    View Demo
                                  </Link>
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
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                <div
                  className="tp-header__right-box d-flex align-items-center justify-content-end"
                >
                  <ul className="d-none d-sm-block">
                    <li>
                      <div className="tp-header__icon-box">
                        <Link to="/Home3" aria-label="User">
                          <span>

                          </span>
                        </Link>
                        <Link to="/Home3" aria-label="Like">
                          <span className="heart p-relative">
                            <i className="fa-light fa-heart"></i>
                            <b className="tp-header__icon-text">0</b>
                          </span>
                        </Link>
                        <Link to="/Home3" aria-label="Add To Cart">
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
                  </ul>
                  <div className="tp-header-2__bar d-xl-none">
                    <button className="tp-menu-bar" aria-label="menu">
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;