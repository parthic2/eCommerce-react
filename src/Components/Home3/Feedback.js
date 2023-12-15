import React from 'react';
import { Link } from 'react-router-dom';
import rating from "../../Assets/img/testimonial/rating.png";
import line from "../../Assets/img/svg/InnerLine.svg";
import { ShopHand } from '../../svg/svg';
import { testimonials } from '../../Data/Data';

const Feedback = () => {
  const renderTestimonials = () => {
    const allTestimonials = testimonials.map((testimonial, index) => (
      <div className="single-column-20" key={index}>
        <div className="rbt-testimonial-box style-2">
          <div className="inner">
            <div className="clint-info-wrapper">
              <div className="thumb">
                <img src={testimonial.image} alt="Client Images" className="img-fluid" />
              </div>
              <div className="client-info">
                <h1 className="title">{testimonial.author}</h1>
                <span>{testimonial.role}</span>
              </div>
            </div>
            <div className="description">
              <p className="subtitle-3">{testimonial.text}</p>
              <div className="icons mt-15">
                <img src={rating} alt="Client Images" className="img-fluid" width="101" height="15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    // Repeat the testimonials to display them 9 times
    return Array.from({ length: 3 }, (_, index) => (
      <React.Fragment key={index}>{allTestimonials}</React.Fragment>
    ));
  };

  return (
    <section className="rbt-splash-testimonial-area bg-color-white overflow-hidden position-relative">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="tp-service__section-box">
              <span className="tp-section-subtitle">Valuable Feedback</span>
              <h1 className="tp-section-title">
                Valuable {" "}
                <span className="p-relative">
                  Feedback
                  <span className="tp-title-shape">
                    <img src={line} alt="line" />
                  </span>
                </span>
              </h1>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6 d-none d-md-block align-self-center">
            <div className="tp-service__btn text-end">
              <Link className="tp-main-btn" to="/Home3">
                Let’s talk — Send a message
                <i><ShopHand /></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="splash-testimonial-all-wrapper pb-60">
        <div className="scroll-animation-wrapper no-overlay mt-30">
          <div className="scroll-animation scroll-right-left">
            {renderTestimonials()}
          </div>
        </div>

        <div className="scroll-animation-wrapper no-overlay mt-30">
          <div className="scroll-animation scroll-left-right">
            {renderTestimonials()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback;