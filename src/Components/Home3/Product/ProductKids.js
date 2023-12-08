import React from 'react';
import { Link } from 'react-router-dom';
import { kidsTabData } from '../../../Data/Data';
import { Star, TopDown, View } from '../../../svg/svg';
import { FaStar } from 'react-icons/fa6';

const ProductKids = () => {
  return (
    <div className="tp-fea-product__wrapper">
      <div className="row">
        {kidsTabData.map(product => (
          <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 mb-25">
            <div className="tp-fea-product__item">
              <div className="tp-fea-product__thumb fix p-relative">
                <img src={product.imgSrc} alt="product" className="img-fluid" />
                <div className="tp-fea-product__thumb-text">
                  <span>Hot</span>
                </div>
                <div className="tp-fea-product__icon-box">
                  <Link to="/Home3"><View /></Link>
                  <Link to="/Home3"><Star /></Link>
                  <Link to="/Home3"><TopDown /></Link>
                </div>
              </div>
              <div className="tp-fea-product__content text-center">
                <div className="tp-fea-product__star">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className={index < product.list ? "" : "color"}><FaStar /></i>
                  ))}
                </div>
                <h2 className="tp-fea-product__title-sm">
                  <Link to="/Home3">{product.title}</Link>
                </h2>
                <div className="tp-fea-product__price">
                  <span>{product.newPrice}</span>
                  <del>{product.oldPrice}</del>
                </div>
                <div className="tp-fea-product__link-box">
                  <Link className="tp-btn-cart" to="/Home3">
                    <span>
                      <img src={require("../../../Assets/img/svg/addCart.svg").default} alt="add to cart" />
                    </span>
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductKids;