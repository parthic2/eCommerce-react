import React, { useState } from 'react';
import { FaAngleRight, FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { navigationLinks, yourCategoryArray } from '../../../Data/Data';

const Sidebar = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="tpoffcanvas__logo">
        <Link to="/" aria-label="logo">
          eSolution
        </Link>
      </div>
      <div className="tpoffcanvas__title">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          incidunt eaque a cumque, porro maxime autem sed.
        </p>
      </div>
      <div className="offcanvas__category d-xl-none pb-40">
        <button
          className="tp-offcanvas-category-toggle"
          aria-label="categories"
          onClick={toggleNav}
        >
          <i><FaBars /></i>
          All Categories
        </button>
        {isNavOpen && (
          <div className="tp-category-mobile-menu">
            <nav className="tp-category-menu-content">
              <ul>
                {yourCategoryArray.map((category, index) => (
                  <li key={index} className={category.submenu ? 'has-dropdown dropdown-opened' : ''}>
                    <Link
                      to="/"
                      className={`expanded ${isSubMenuVisible ? 'dropdown-opened' : ''}`}
                    >
                      {category.catLogo}
                      {category.label}
                      {category.submenu && (
                        <button
                          className={`dropdown-toggle-btn ${isSubMenuVisible ? 'dropdown-opened' : ''}`}
                          onClick={() => setIsSubMenuVisible(!isSubMenuVisible)}
                        >
                          <i><FaAngleRight /></i>
                        </button>
                      )}
                    </Link>
                    {category.submenu && (
                      <ul
                        className='tp-submenu'
                        style={{ display: isSubMenuVisible ? 'block' : 'none' }}
                      >
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
        )}
      </div>
      <div className="tp-main-menu-mobile d-xl-none">
        <nav className="tp-main-menu-content">
          <ul>
            {navigationLinks.map((item, index) => (
              <li key={index} className={item.submenu ? 'has-dropdown dropdown-opened' : ''}>
                <Link
                  to={item.to}
                  className={`expanded ${isSubMenuVisible ? 'dropdown-opened' : ''}`}
                >
                  {item.label}
                  {item.submenu && (
                    <button
                      className={`dropdown-toggle-btn ${isSubMenuVisible ? 'dropdown-opened' : ''}`}
                      onClick={() => setIsSubMenuVisible(!isSubMenuVisible)}
                    >
                      <i><FaAngleRight /></i>
                    </button>
                  )}
                </Link>
                {item.submenu && (
                  <div className="tp-submenu submenu has-homemenu" style={{ display: isSubMenuVisible ? 'block' : 'none' }}>
                    <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-2">
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
      <div className="tpoffcanvas__contact-info">
        <div className="tpoffcanvas__contact-title">
          <h5>Contact us</h5>
        </div>
        <ul>
          <li>
            <i className="fa-light fa-location-dot"></i>
            <Link to="/">Melbone st, Australia, Ny 12099</Link>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <Link to="/"><span>contact@info.com</span></Link>
          </li>
          <li>
            <i className="fal fa-phone-alt"></i>
            <Link to="/">+48 555 223 224</Link>
          </li>
        </ul>
      </div>
      <div className="tpoffcanvas__input">
        <div className="tpoffcanvas__input-title">
          <h4>Get UPdate</h4>
        </div>
        <form action="#">
          <div className="p-relative">
            <input type="text" placeholder="Enter mail" />
            <button>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="tpoffcanvas__social">
        <div className="social-icon">
          <Link to="/"><i className="fab fa-twitter"></i></Link>
          <Link to="/"><i className="fab fa-instagram"></i></Link>
          <Link to="/"><i className="fab fa-facebook-f"></i></Link>
          <Link to="/"><i className="fab fa-pinterest-p"></i></Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar;