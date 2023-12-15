import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaVimeoV } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CopyRight = () => {
  return (
    <div className="tp-copyright-4__area">
      <div className="container custom-container-3">
        <div className="tp-copyright-4__border">
          <div className="row align-items-center">
            <div
              className="col-xl-4 col-md-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-copyright-4__left-box text-center text-md-start">
                <span>
                  <strong>© 2023</strong>{" "}
                  Powered by ABC . All Rights
                  Reserved.
                </span>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-4 d-none d-xl-block wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-copyright-4__social-box text-center">
                <Link to="https://facebook.com/" aria-label="Facebook"><FaFacebookF /></Link>
                <Link to="https://vimeo.com/" aria-label="Vimeo"><FaVimeoV /></Link>
                <Link to="https://twitter.com/" aria-label="Twitter"><FaTwitter /></Link>
                <Link to="https://linkedin.com/" aria-label="Linkedin"><FaLinkedinIn /></Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-4 col-md-6 d-none d-md-block wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-copyright-4__left-box text-end">
                <ul>
                  <li><Link to="/">Terms and conditions</Link></li>
                  <li><Link to="/"> Privacy policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRight;