import React from 'react';
import Breadcrumb from '../../Common/Breadcrumb';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Home1/Footer/Footer';
import Header from '../../Components/Home1/Header/Header';
import { FooterCall, FooterLocation, FooterMail } from '../../svg/svg';

const Contact = () => {
  return (
    <>
      <Header />

      <Breadcrumb
        home="home"
        ser="Contact us"
        title="Our "
        title1="contact us"
      />
      
      <div className="ec-page-content pb-90 pt-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="ec-contact-container">
                <div className="ec-contact-form">
                  <form action="#" method="post">
                    <span className="ec-contact-wrap">
                      <label>First Name*</label>
                      <input type="text" name="firstname" placeholder="Enter your first name" />
                    </span>
                    <span className="ec-contact-wrap">
                      <label>Last Name*</label>
                      <input type="text" name="lastname" placeholder="Enter your last name" />
                    </span>
                    <span className="ec-contact-wrap">
                      <label>Email*</label>
                      <input type="email" name="email" placeholder="Enter your email address" />
                    </span>
                    <span className="ec-contact-wrap">
                      <label>Phone Number*</label>
                      <input type="text" name="phonenumber" placeholder="Enter your phone number" />
                    </span>
                    <span className="ec-contact-wrap">
                      <label>Comments/Questions*</label>
                      <textarea name="address"
                        placeholder="Please leave your comments here.."></textarea>
                    </span>
                    <span className="ec-contact-wrap ec-contact-btn">
                      <button className="btn btn-primary" type="submit">Submit</button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ec_contact_info">
                <ul className="align-items-center">
                  <li className="ec-contact-item">
                    <span><FooterLocation /></span>
                    <span>Address :</span>
                    71 Pilgrim Avenue Chevy Chase, east california. east california. MD 20815, USA
                  </li>
                  <li className="ec-contact-item align-items-center">
                    <span><FooterCall /></span>
                    <span>Call Us :</span>
                    <Link to="/">+44 0123 456 789</Link>
                  </li>
                  <li className="ec-contact-item align-items-center">
                    <span><FooterMail /></span>
                    <span>Email :</span>
                    <Link to="/">example@ec-email.com</Link>
                  </li>
                </ul>
              </div>
              <div className="ec_contact_map">
                <div className="ec_map_canvas">
                  <iframe title="myFrame" id="ec_map_canvas" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(vnsgu)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact;