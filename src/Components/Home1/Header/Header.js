import React from 'react';
import { Link } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import call from "../../../Assets/img/svg/call.svg";
import Sidebar from '../Sidebar/Sidebar';
import { navigationLinks, yourCategoryArray } from '../../../Data/Data';
import useScrollNavbar1 from '../../../Hooks/useScrollnavbar1';
import TopHeader from './TopHeader';

const Header = () => {
  const { isHeaderSticky, isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useScrollNavbar1();

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

      <header className="tp-header-wrap">
        <TopHeader />

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
                      {yourCategoryArray.map((category, index) => (
                        <li key={index} className={category.submenu ? 'has-dropdown' : ''}>
                          <Link to="/">
                            <span>{category.catLogo}</span>
                            {category.label}
                          </Link>
                          {category.submenu && (
                            <ul className='tp-submenu'>
                              {category.submenu.map((subCatItem, index) => (
                                <li key={index}>
                                  <Link>{subCatItem.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
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
                    <button className="tp-menu-bar" aria-label="menu" onClick={handleSidebarOpen}>
                      <home1Menu />
                    </button>
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