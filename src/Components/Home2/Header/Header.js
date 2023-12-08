import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaBars,FaXmark } from "react-icons/fa6";
import Sidebar from '../Sidebar/Sidebar';
import { navigationLinks } from '../../../Data/Data';
import user from "../../../Assets/img/svg/user.svg";
import { LogoBg, Cart, LetsTalk } from "../../../svg/svg";
import { useScrollNavbar2 } from '../../../Hooks/useScrollnavbar1';

const Header = () => {
  const { isHeaderSticky, isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useScrollNavbar2();

  return (
    <>
      {isSidebarOpen && (
        <div className="tpoffcanvas-area">
          <div className={`tpoffcanvas ${isSidebarOpen ? 'opened' : ''}`}>
            <div className="tpoffcanvas__close-btn">
              <button className="close-btn" onClick={handleSidebarClose}>
                <i><FaXmark /></i>
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
      {isSidebarOpen && <div className="body-overlay apply" onClick={handleSidebarClose}></div>}

      <header className="tp-header-height">
        <div
          id="header-sticky"
          className={isHeaderSticky ? 'header-sticky' : 'tp-header-2__area'}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-4 col-6">
                <div className="tp-header-2__logo-3-box z-index-9 d-none d-xl-block p-relative">
                  <Link to="/Home2" aria-label="E-Solution">
                    <div className="tp-header-2__logo-3 z-index">eSolution</div>
                    <span><LogoBg /></span>
                  </Link>
                </div>
                <div className="tp-header-3__logo d-xl-none">
                  <Link to="/Home2" aria-label="E-Solution">eSolution</Link>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block text-center">
                <div className="tp-header-2__main-menu tp-header__main-menu tp-header-2__main-menu-3">
                  <nav className="tp-main-menu-content">
                    <ul>
                      {navigationLinks.map((item, index) => (
                        <li key={index} className={item.submenu ? 'has-dropdown' : ''}>
                          <Link to={item.to}>{item.label}</Link>
                          {item.submenu && (
                            <div className="tp-submenu submenu has-homemenu">
                              <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-3">
                                {item.submenu.map((submenuItem, subIndex) => (
                                  <div key={subIndex} className="col homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <Link to={submenuItem.to}>
                                        <img
                                          src={submenuItem.imgSrc}
                                          alt="home banner"
                                          className="img-fluid"
                                          width="250"
                                          height="279"
                                          loading="lazy"
                                        />
                                      </Link>
                                      <div className="homemenu-btn">
                                        <Link className="tp-menu-btn" to={submenuItem.to}>View Demo</Link>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        <Link to={submenuItem.to}>{submenuItem.label}</Link>
                                      </h4>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
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
                          <span><img src={user} alt="user" /></span>
                        </Link>
                        <Link to="/Home2" aria-label="Heart">
                          <span className="heart p-relative">
                            <i><CiHeart /></i>
                            <b className="tp-header__icon-text-2">0</b>
                          </span>
                        </Link>
                        <Link to="/Home2" aria-label="Add To Cart">
                          <span className="cart p-relative">
                            <Cart />
                            <b className="tp-header__icon-text">0</b>
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="tp-header__chat-box">
                        <Link to="/Home2" aria-label="let's talk">
                          Let,s Talk
                          <span><LetsTalk /></span>
                        </Link>
                      </div>
                    </li>
                    <li className="d-xl-none">
                      <div className="tp-header-2__bar">
                        <button className="tp-menu-bar" aria-label="menu" onClick={handleSidebarOpen}>
                          <i><FaBars /></i>
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
    </>
  )
}

export default Header;