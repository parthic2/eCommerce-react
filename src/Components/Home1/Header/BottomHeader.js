import React from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import call from "../../../Assets/img/svg/call.svg";
import { navigationLinks, yourCategoryArray } from '../../../Data/Data';
import { Home1Menu } from '../../../svg/svg';

const BottomHeader = ({ isHeaderSticky, handleSidebarOpen }) => {
  return (
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
                <span><HiMiniBars3BottomLeft /></span>
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
                  <Home1Menu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomHeader;