import React from 'react';
import { Link } from 'react-router-dom';
import { StarBlack, StarWhite, TopDownBlack, TopDownWhite, ViewBlack, ViewWhite } from '../../../svg/svg';
import { bookTabData } from '../../../Data/Data';
import { FaStar } from 'react-icons/fa6';
import { useHover } from '../../../Hooks/useHover';

const TopSeller = () => {
  const { isViewHovered, isStarHovered, isTopDownHovered, handleViewMouseEnter, handleViewMouseLeave, handleStarMouseEnter, handleStarMouseLeave, handleTopDownMouseEnter, handleTopDownMouseLeave } = useHover();

  return (
    <div className="tp-trend-product-5__wrapper">
      <div className="row">
        {bookTabData.map(product => (
          <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
            <div className="tp-trend-product-5__item-box mt-10">
              <div className="tp-trend-product-5__item">
                <div className="tp-trend-product-5__thumb fix p-relative">
                  <img src={product.imgSrc} alt="trend" className="img-fluid" width="259" height="172" />
                  <div className="tp-trend-product-5__icon-box">
                    <Link
                      to="/"
                      onMouseEnter={handleViewMouseEnter}
                      onMouseLeave={handleViewMouseLeave}
                    >
                      {isViewHovered ? (
                        <ViewWhite />
                      ) : (
                        <ViewBlack />
                      )}
                    </Link>
                    <Link
                      to="/"
                      onMouseEnter={handleStarMouseEnter}
                      onMouseLeave={handleStarMouseLeave}
                    >
                      {isStarHovered ? (
                        <StarWhite />
                      ) : (
                        <StarBlack />
                      )}
                    </Link>
                    <Link
                      to="/"
                      onMouseEnter={handleTopDownMouseEnter}
                      onMouseLeave={handleTopDownMouseLeave}
                    >
                      {isTopDownHovered ? (
                        <TopDownWhite />
                      ) : (
                        <TopDownBlack />
                      )}
                    </Link>
                  </div>
                  <div className="tp-trend-product-5__thumb-text">
                    <span>new</span>
                  </div>
                </div>
                <div className="tp-trend-product-5__content">
                  <ul>
                    <li>
                      <div className="tp-trend-product-5__star">
                        <span>Buyers Rating :</span>
                        {[...Array(5)].map((_, index) => (
                          <i key={index} className={index < product.list ? "" : "color"}><FaStar /></i>
                        ))}
                      </div>
                    </li>
                    <li>
                      <div className="tp-trend-product-5__title-box">
                        <h4 className="tp-trend-product-5__title-sm">
                          <Link to="/">{product.title}</Link>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="tp-trend-product-5__price">
                        <del>{product.oldPrice}</del>
                        <span>{product.newPrice}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tp-trend-product-5__link-box text-center">
                <Link className="tp-btn-cart" to="/">
                  <span>
                    <img src={require("../../../Assets/img/svg/addCart.svg").default} alt="add to cart" />
                  </span>
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSeller;