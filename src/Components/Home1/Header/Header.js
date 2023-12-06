import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import home1 from "../../../Assets/img/menu/home-1.png";
import home2 from "../../../Assets/img/menu/home-2.png";
import home3 from "../../../Assets/img/menu/home-3.png";
import bag from "../../../Assets/img/svg/bag.svg";
import user from "../../../Assets/img/svg/user.svg";
import call from "../../../Assets/img/svg/call.svg";

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
    <header className="tp-header-wrap">
      <div
        className="tp-header-middle-5__area tp-header-middle-5__border d-none d-xl-block"
      >
        <div className="container custom-container-4">
          <div className="row align-items-center">
            <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-6">
              <div className="tp-header-middle-5__left-box">
                <ul>
                  <li>
                    <div className="tp-header-middle-5__input-box p-relative">
                      <input type="text" placeholder="Search" />
                      <button className="tp-header-middle-5__search-box" aria-label="Search">
                        <span>
                          <IoIosSearch />
                        </span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-6 text-lg-center">
              <div className="tp-header-5-logo">
                <Link to="/" aria-label="E-Solution">
                  eSolution
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-6">
              <div className="tp-header-middle-5__right-box text-end">
                <ul>
                  <li>
                    <div
                      className="tp-header-middle-5__icon-wrap d-none d-xl-block"
                    >
                      <div
                        className="tp-header-middle-5__icon d-flex align-items-center justify-content-end"
                      >
                        <Link to="/" aria-label="User Icon">
                          <div
                            className="tp-header-middle-4__icon icon-space p-relative"
                          >
                            <img src={user} alt="user" />
                          </div>
                        </Link>
                        <Link to="/" aria-label="Toggle Notifications">
                          <div className="tp-header-middle-4__icon p-relative">
                            <span>
                              <i className="fal fa-random color"></i>
                            </span>
                            <div className="tp-header-middle-4__icon-text">
                              <span>0</span>
                            </div>
                          </div>
                        </Link>
                        <Link to="/" aria-label="Like this">
                          <div className="tp-header-middle-4__icon p-relative">
                            <span>
                              <i className="fal fa-heart color"></i>
                            </span>
                            <div
                              className="tp-header-middle-4__icon-text red-color"
                            >
                              <span>0</span>
                            </div>
                          </div>
                        </Link>
                        <Link to="/" aria-label="View Details">
                          <div className="tp-header-middle-4__icon p-relative">
                            <span>
                              <img src={bag} alt="bag" />
                            </span>
                            <div
                              className="tp-header-middle-4__icon-text red-color"
                            >
                              <span>0</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="header-sticky"
        className={isHeaderSticky ? 'header-sticky tp-header-5-space' : 'tp-header-5-area tp-header-5-space'}
      >
        <div className="container custom-container-4">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-6 col-md-4 col-6">
              <div
                className="tp-header-category tp-category-menu tp-header-category-toggle d-none d-xl-block"
              >
                <button className="tp-category-menu-btn tp-category-menu-toggle">
                  <span>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  All Categories
                </button>
                <nav className="tp-category-menu-content">
                  <ul>
                    <li className="has-dropdown">
                      <Link to="/">
                        <span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.6856 4.54975C2.6856 3.52014 3.51984 2.6859 4.54945 2.68508H5.3977C5.88984 2.68508 6.36136 2.48971 6.71089 2.14348L7.30359 1.54995C8.02984 0.819578 9.21031 0.816281 9.94068 1.54253L9.9415 1.54336L9.94892 1.54995L10.5425 2.14348C10.892 2.49053 11.3635 2.68508 11.8556 2.68508H12.7031C13.7327 2.68508 14.5677 3.51932 14.5677 4.54975V5.39636C14.5677 5.88849 14.7623 6.36084 15.1093 6.71037L15.7029 7.3039C16.4332 8.03015 16.4374 9.21061 15.7111 9.94098L15.7103 9.94181L15.7029 9.94923L15.1093 10.5428C14.7623 10.8915 14.5677 11.363 14.5677 11.8551V12.7034C14.5677 13.733 13.7335 14.5672 12.7039 14.5672H12.7031H11.854C11.3619 14.5672 10.8895 14.7626 10.5408 15.1096L9.94727 15.7024C9.22185 16.4327 8.04221 16.4368 7.31183 15.7122C7.31101 15.7114 7.31019 15.7106 7.30936 15.7098L7.30194 15.7024L6.70924 15.1096C6.36054 14.7626 5.88819 14.568 5.39605 14.5672H4.54945C3.51984 14.5672 2.6856 13.733 2.6856 12.7034V11.8535C2.6856 11.3613 2.49023 10.8898 2.14318 10.5411L1.55047 9.94758C0.820097 9.22215 0.815976 8.04251 1.5414 7.31214C1.5414 7.31132 1.54223 7.31049 1.54305 7.30967L1.55047 7.30225L2.14318 6.70872C2.49023 6.35919 2.6856 5.88767 2.6856 5.39471V4.54975"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.50787 10.7453L10.745 6.50812"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.6823 10.6862H10.6897"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.56053 6.56446H6.56795"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Handmade
                      </Link>
                      <ul className="tp-submenu">
                        <li><Link to="/">Table</Link></li>
                        <li><Link to="/">Chair</Link></li>
                        <li><Link to="/">Watch</Link></li>
                        <li><Link to="/">Furniture</Link></li>
                        <li><Link to="/">Clock</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/">
                        <span>
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5 8.5V16H2.50003V8.5"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 4.75H1V8.5H16V4.75Z"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.5 16V4.75"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.49997 4.75H5.12497C4.62769 4.75 4.15077 4.55246 3.79914 4.20083C3.44751 3.84919 3.24997 3.37228 3.24997 2.875C3.24997 2.37772 3.44751 1.90081 3.79914 1.54917C4.15077 1.19754 4.62769 1 5.12497 1C7.74997 1 8.49997 4.75 8.49997 4.75Z"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.5 4.75H11.875C12.3723 4.75 12.8492 4.55246 13.2008 4.20083C13.5525 3.84919 13.75 3.37228 13.75 2.875C13.75 2.37772 13.5525 1.90081 13.2008 1.54917C12.8492 1.19754 12.3723 1 11.875 1C9.25 1 8.5 4.75 8.5 4.75Z"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Gifts Sets
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5 1H2.5C1.67157 1 1 1.67157 1 2.5V10C1 10.8284 1.67157 11.5 2.5 11.5H14.5C15.3284 11.5 16 10.8284 16 10V2.5C16 1.67157 15.3284 1 14.5 1Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.5 14.5H11.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.5 11.5V14.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Candles
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>
                          <svg
                            width="15"
                            height="18"
                            viewBox="0 0 15 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.375 1H2.625C1.72754 1 1 1.72754 1 2.625V15.625C1 16.5225 1.72754 17.25 2.625 17.25H12.375C13.2725 17.25 14 16.5225 14 15.625V2.625C14 1.72754 13.2725 1 12.375 1Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.5 14H7.50875"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Book
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9 1C13.4176 1 17 4.5816 17 9C17 13.4184 13.4176 17 9 17C4.5816 17 1 13.4184 1 9C1 4.5816 4.5816 1 9 1Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.5263 8.99592C11.5263 8.31286 8.02529 6.12769 7.62814 6.5206C7.23099 6.9135 7.19281 11.0413 7.62814 11.4712C8.06348 11.9027 11.5263 9.67898 11.5263 8.99592Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Cosmetics
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.6292 1.26076C12.5027 1.60843 12.7699 2.81924 13.1271 3.20843C13.4843 3.59762 13.9955 3.72995 14.2783 3.72995C15.7814 3.72995 17 4.94854 17 6.45081V11.4627C17 13.4778 15.3654 15.1124 13.3503 15.1124H4.64973C2.63373 15.1124 1 13.4778 1 11.4627V6.45081C1 4.94854 2.21859 3.72995 3.72173 3.72995C4.00368 3.72995 4.51481 3.59762 4.87287 3.20843C5.23005 2.81924 5.49643 1.60843 6.36995 1.26076C7.24432 0.913081 10.7557 0.913081 11.6292 1.26076Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.7527 5.97314H13.7605"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.7491 9.11086C11.7491 7.59215 10.5184 6.36145 8.99974 6.36145C7.48104 6.36145 6.25034 7.59215 6.25034 9.11086C6.25034 10.6296 7.48104 11.8603 8.99974 11.8603C10.5184 11.8603 11.7491 10.6296 11.7491 9.11086Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Handy Cream
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.30431 1C1.58423 1 1 1.59405 1 2.32534V3.10537C1 3.64706 1.20599 4.16798 1.57446 4.55981L5.61258 8.8536L5.61436 8.8509C6.39393 9.64899 6.83254 10.7279 6.83254 11.8528V15.6626C6.83254 15.9172 7.09891 16.0798 7.32 15.9597L9.61963 14.7066C9.96679 14.517 10.1834 14.1486 10.1834 13.7487V11.8428C10.1834 10.7242 10.6158 9.64989 11.3883 8.8536L15.4264 4.55981C15.794 4.16798 16 3.64706 16 3.10537V2.32534C16 1.59405 15.4167 1 14.6966 1H2.30431Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Plastic Gifts
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.7462 7.16473V13.167C15.7462 13.6457 15.556 14.1049 15.2175 14.4434C14.8789 14.782 14.4197 14.9722 13.941 14.9722H4.3058C3.82703 14.9722 3.3679 14.782 3.02936 14.4434C2.69083 14.1049 2.50061 13.6457 2.50061 13.167V9.36255"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.46186 1.00001C3.18176 0.999863 2.90854 1.08659 2.6798 1.24825C2.45106 1.4099 2.27807 1.63852 2.18471 1.9026L1.11062 5.01655C0.713475 6.15382 1.41752 7.16021 2.71274 7.16021C3.18296 7.14863 3.64325 7.02257 4.05374 6.79294C4.46424 6.56331 4.81255 6.23705 5.0685 5.84243C5.20151 6.24071 5.46067 6.58479 5.80676 6.82258C6.15285 7.06036 6.56702 7.17889 6.98651 7.16021C7.18566 6.7642 7.4909 6.43132 7.86823 6.19871C8.24556 5.96611 8.68013 5.84294 9.1234 5.84294C9.56666 5.84294 10.0012 5.96611 10.3785 6.19871C10.7558 6.43132 11.0611 6.7642 11.2603 7.16021V7.16021C11.679 7.17789 12.0922 7.0589 12.4373 6.82119C12.7825 6.58348 13.041 6.23994 13.1738 5.84243C13.431 6.23686 13.7802 6.56288 14.1914 6.79243C14.6026 7.02199 15.0633 7.1482 15.5341 7.16021C16.8293 7.16021 17.5288 6.15382 17.1362 5.01655L16.0621 1.9026C15.9685 1.6378 15.7948 1.40866 15.5652 1.24694C15.3355 1.08522 15.0613 0.998927 14.7804 1.00001H3.46186Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.0707 14.9722H7.19861V11.4701C7.19861 10.983 7.3921 10.5158 7.73656 10.1713C8.08102 9.82685 8.54822 9.63333 9.03536 9.63333H9.22041C9.70755 9.63333 10.1747 9.82685 10.5192 10.1713C10.8637 10.5158 11.0572 10.983 11.0572 11.4701L11.0707 14.9722Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Silk Accessories
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="tp-header-4__logo d-xl-none">
                <Link to="/" aria-label="E-Solution">
                  eSolution
                </Link>
              </div>
            </div>
            <div className="col-xl-7 d-none d-xl-block text-center">
              <div className="tp-header-4__main-menu menu-space">
                <nav className="tp-main-menu-content">
                  <ul>
                    <li className="has-dropdown">
                      <Link to="/">Home</Link>
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
                                  alt="banner"
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
            <div className="col-xl-2 col-lg-6 col-md-8 col-6">
              <div
                className="tp-header-5-right-box d-flex align-items-center justify-content-end"
              >
                <div className="tp-header-5-contact">
                  <Link to="/">
                    <i>
                      <img src={call} alt="call" />
                    </i>
                    Call To Us
                  </Link>
                </div>
                <div className="tp-header-middle-5__bar d-xl-none">
                  <button className="tp-menu-bar" aria-label="menu">
                    <svg
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="2.13418"
                        cy="2.14285"
                        rx="2.13418"
                        ry="2.14285"
                        fill="black"
                      />
                      <ellipse
                        cx="12.4242"
                        cy="2.14285"
                        rx="2.13418"
                        ry="2.14285"
                        fill="black"
                      />
                      <ellipse
                        cx="22.7133"
                        cy="2.14285"
                        rx="2.13418"
                        ry="2.14285"
                        fill="black"
                      />
                      <ellipse
                        cx="2.13418"
                        cy="11.3266"
                        rx="2.13418"
                        ry="2.14285"
                        fill="black"
                      />
                      <ellipse
                        cx="12.4242"
                        cy="11.3266"
                        rx="2.13418"
                        ry="2.14285"
                        fill="#735CFC"
                      />
                      <ellipse
                        cx="22.7133"
                        cy="11.3266"
                        rx="2.13418"
                        ry="2.14285"
                        fill="black"
                      />
                      <ellipse
                        cx="2.13418"
                        cy="20.6632"
                        rx="2.13418"
                        ry="2.14285"
                        fill="black"
                      />
                      <ellipse
                        cx="12.5004"
                        cy="20.6632"
                        rx="2.13418"
                        ry="2.14285"
                        fill="black"
                      />
                      <ellipse
                        cx="22.8656"
                        cy="20.6632"
                        rx="2.13418"
                        ry="2.14285"
                        fill="#735CFC"
                      />
                    </svg>
                  </button>
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