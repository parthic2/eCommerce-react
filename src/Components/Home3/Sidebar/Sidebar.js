import React, { useState } from 'react';
import { FaAngleRight, FaLocationDot, FaEnvelope, FaPhoneFlip, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../../Data/Data';

const Sidebar = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  return (
    <>
      <div className="tpoffcanvas__logo">
        <Link to="/Home3" aria-label="logo">
          eSolution
        </Link>
      </div>
      <div className="tpoffcanvas__title">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          incidunt eaque a cumque, porro maxime autem sed.
        </p>
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
            <FaLocationDot />
            <Link to="/Home3">Melbone st, Australia, Ny 12099</Link>
          </li>
          <li>
            <FaEnvelope />
            <Link to="/Home3"><span>contact@info.com</span></Link>
          </li>
          <li>
            <FaPhoneFlip />
            <Link to="/Home3">+48 555 223 224</Link>
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
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
      <div className="tpoffcanvas__social">
        <div className="social-icon">
          <Link to="/Home3"><FaTwitter /></Link>
          <Link to="/Home3"><FaInstagram /></Link>
          <Link to="/Home3"><FaFacebookF /></Link>
          <Link to="/Home3"><FaPinterestP /></Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar;