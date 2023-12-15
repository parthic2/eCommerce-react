import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { Cart } from '../../../svg/svg';
import user from "../../../Assets/img/svg/user.svg";
import logo from "../../../Assets/img/menu/logo-main.svg";
import { useScrollNavbar3 } from '../../../Hooks/useScrollnavbar1';
import { navigationLinks } from '../../../Data/Data';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const { isHeaderSticky, isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useScrollNavbar3();

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

      <header id="tp-header-height">
        <div id="header-sticky" className={isHeaderSticky ? 'header-sticky' : 'tp-header__area'}>
          <div className="tp-header__transparent">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="tp-header__left-box d-flex align-items-center">
                    <div className="tp-header__logo">
                      <Link to="/Home3" aria-label="E-Solution">
                        <img src={logo} alt="Logo" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 d-none d-xl-block text-center">
                  <div className="tp-header__main-menu">
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
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="tp-header__right-box d-flex align-items-center justify-content-end">
                    <ul className="d-none d-sm-block">
                      <li>
                        <div className="tp-header__icon-box">
                          <Link to="/Home3" aria-label="User">
                            <span><img src={user} alt="user" /></span>
                          </Link>
                          <Link to="/Home3" aria-label="Like">
                            <span className="heart p-relative">
                              <i><CiHeart /></i>
                              <b className="tp-header__icon-text-2">0</b>
                            </span>
                          </Link>
                          <Link to="/Home3" aria-label="Add To Cart">
                            <span className="cart p-relative">
                              <Cart />
                              <b className="tp-header__icon-text">0</b>
                            </span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <div className="tp-header-2__bar d-xl-none">
                      <button className="tp-menu-bar" aria-label="menu" onClick={handleSidebarOpen}>
                        <i><FaBars /></i>
                      </button>
                    </div>
                  </div>
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