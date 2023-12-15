import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LiaRandomSolid } from "react-icons/lia";
import logo from "../../../Assets/img/menu/logo-main.svg";
import bag from "../../../Assets/img/svg/bag.svg";
import user from "../../../Assets/img/svg/user.svg";

const TopHeader = () => {
  return (
    <div className="tp-header-middle-5__area tp-header-middle-5__border d-none d-xl-block">
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
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-6">
            <div className="tp-header-middle-5__right-box text-end">
              <ul>
                <li>
                  <div className="tp-header-middle-5__icon-wrap d-none d-xl-block">
                    <div className="tp-header-middle-5__icon d-flex align-items-center justify-content-end">
                      <Link to="/" aria-label="User Icon">
                        <div className="tp-header-middle-4__icon icon-space p-relative">
                          <img src={user} alt="user" />
                        </div>
                      </Link>
                      <Link to="/" aria-label="Toggle Notifications">
                        <div className="tp-header-middle-4__icon p-relative">
                          <LiaRandomSolid />
                          <div className="tp-header-middle-4__icon-text">
                            <span>0</span>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" aria-label="Like this">
                        <div className="tp-header-middle-4__icon p-relative">
                          <CiHeart />
                          <div className="tp-header-middle-4__icon-text red-color">
                            <span>0</span>
                          </div>
                        </div>
                      </Link>
                      <Link to="/" aria-label="View Details">
                        <div className="tp-header-middle-4__icon p-relative">
                          <span>
                            <img src={bag} alt="bag" />
                          </span>
                          <div className="tp-header-middle-4__icon-text red-color">
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
  )
}

export default TopHeader;