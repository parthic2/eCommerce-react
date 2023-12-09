import React from 'react';
import { Link } from 'react-router-dom';
import line from "../../Assets/img/svg/InnerLine.svg";
import { blogItems } from '../../Data/Data';

const Blog = () => {
  return (
    <div className="tp-blog__area pt-90 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog__section-box text-center">
              <span className="tp-section-subtitle">Recent News & Blog</span>
              <h1 className="tp-section-title">
                Attractive articles <br />
                <span className="p-relative">
                  updated daily
                  <span className="tp-title-shape">
                    <img src={line} alt="line" />
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          {blogItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12 mt-30 wow tpfadeUp" data-wow-duration={item.duration} data-wow-delay={item.delay}>
              <div className="rbt-card variation-03 rbt-hover">
                <div className="rbt-card-img">
                  <Link className="thumbnail-link" to="/Home3">
                    <img src={item.image} alt="Card" className="img-fluid" width="296" height="197" />
                  </Link>
                  <div className="tp-blog__thumb-text">
                    <span>
                      {item.date.day} <br /><b>{item.date.month}</b>
                    </span>
                  </div>
                </div>
                <div className="rbt-card-body">
                  <div className="tp-blog__meta">
                    <span>Posted by {item.postedBy}</span>
                  </div>
                  <h5 className="tp-blog__title">
                    <Link to="/Home3">{item.title}</Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog;