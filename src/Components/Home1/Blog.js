import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../../Data/Data';

const Blog = () => {
  return (
    <div className="tp-blog-4__area pt-115 pb-65">
      <div className="container custom-container-3">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-4__section-box text-center mb-55">
              <span className="tp-section-subtitle-5">Latest News & Blog</span>
              <h1 className="tp-section-title-2">
                Latest {" "}
                <span className="p-relative">
                  News & Blog
                  <span className="tp-title-shape">
                    <img src={require("../../Assets/img/svg/line1.svg").default} alt="line" />
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          {blogData.map((blog, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-50 wow tpfadeUp" data-wow-duration={blog.duration} data-wow-delay={blog.delay}>
              <div className="tp-blog-4__item">
                <div className="tp-blog-4__thumb p-relative">
                  <Link to="/">
                    <img src={blog.image} alt="blog" className="img-fluid" width="356" height="237" />
                  </Link>
                  <div className="tp-blog-4__thumb-text">
                    <span>BY: {blog.author}</span>
                  </div>
                </div>
                <div className="tp-blog-4__content">
                  <h1 className="tp-blog-4__title">
                    <Link to="/">{blog.title}</Link>
                  </h1>
                </div>
                <div className="tp-blog-4__meta">
                  <span>{blog.date}</span>
                  <span>Comments ({blog.comments})</span>
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