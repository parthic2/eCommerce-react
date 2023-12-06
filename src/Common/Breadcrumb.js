import React from 'react';
import line from "../Assets/img/svg/InnerLine.svg";
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  return (
    <div className="tp-breadcrumb__area fix tp-breadcrumb-height">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-breadcrumb__content text-center z-index-5">
              <div className="tp-breadcrumb__list">
                <span><Link href="index.html">{props.home} </Link></span>
                <span className="dvdr">. </span>
                <span>{props.ser}</span>
              </div>
              <h3 className="tp-breadcrumb__title">
                {props.title}
                <span className="p-relative z-index-5">
                  {props.title1}
                  <span className="tp-title-shape">
                    <img src={line} alt="line" />
                  </span>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb;