import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from "../../Assets/img/blog/blog1-1.jpg";
import blog2 from "../../Assets/img/blog/blog1-2.jpg";
import blog3 from "../../Assets/img/blog/blog1-3.jpg";
import line from "../../Assets/img/svg/InnerLine.svg";

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
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12 mt-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="rbt-card variation-03 rbt-hover">
              <div className="rbt-card-img">
                <Link className="thumbnail-link" to="/Home3">
                  <img
                    src={blog1}
                    alt="Card"
                    className="img-fluid"
                    width="296"
                    height="197"
                  />
                </Link>
                <div className="tp-blog__thumb-text">
                  <span>
                    26 <br /><b>Aug</b>
                  </span>
                </div>
              </div>
              <div className="rbt-card-body">
                <div className="tp-blog__meta">
                  <span>Posted by 21 lab -<b>Nov 13, 2022</b></span>
                </div>
                <h5 className="tp-blog__title">
                  <Link to="/Home3">Winter 2023 Trending Fashion Market.</Link>
                </h5>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12 mt-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="rbt-card variation-03 rbt-hover">
              <div className="rbt-card-img">
                <Link className="thumbnail-link" to="/Home3">
                  <img
                    src={blog2}
                    alt="Card"
                    className="img-fluid"
                    width="296"
                    height="197"
                  />
                </Link>
                <div className="tp-blog__thumb-text">
                  <span>
                    12 <br /><b>Feb</b>
                  </span>
                </div>
              </div>
              <div className="rbt-card-body">
                <div className="tp-blog__meta">
                  <span>Posted by 21 lab -<b>Nov 13, 2022</b></span>
                </div>
                <h5 className="tp-blog__title">
                  <Link to="/Home3">Fashion Market Reveals Her Jacket.</Link>
                </h5>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12 mt-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="rbt-card variation-03 rbt-hover">
              <div className="rbt-card-img">
                <Link className="thumbnail-link" to="/Home3">
                  <img
                    src={blog3}
                    alt="Card"
                    className="img-fluid"
                    width="296"
                    height="197"
                  />
                </Link>
                <div className="tp-blog__thumb-text">
                  <span>
                    09<br /><b>Jan</b>
                  </span>
                </div>
              </div>
              <div className="rbt-card-body">
                <div className="tp-blog__meta">
                  <span>Posted by 21 lab -<b>Nov 13, 2022</b></span>
                </div>
                <h5 className="tp-blog__title">
                  <Link to="/Home3">Summer Trending Fashion Market.</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;