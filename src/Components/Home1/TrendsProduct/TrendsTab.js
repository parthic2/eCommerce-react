import React from 'react';
import { tabData } from '../../../Data/Data';
import { Link } from 'react-router-dom';

const TrendsTab = () => {
  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-7">
        <div className="tp-trend-product-5__button-box">
          <nav>
            <div
              className="nav nav-tab justify-content-center"
              id="nav-tab"
              role="tablist"
            >
              {tabData.map((tab, index) => (
                <button
                  key={index}
                  className={`nav-link ${index === 0 ? 'active' : ''}`}
                  id={`nav-${tab.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${tab.id}`}
                  data-animation="zoom-in"
                  type="button"
                  role="tab"
                  aria-controls={`nav-${tab.id}`}
                  aria-selected={index === 0 ? 'true' : 'false'}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 d-none d-lg-block">
        <div className="tp-trend-product-5__button">
          <Link className="tp-btn-border" to="/">All Products</Link>
        </div>
      </div>
    </>
  )
}

export default TrendsTab;