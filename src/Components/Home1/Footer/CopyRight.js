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
                  Powered by eSolution . All Rights
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
                <Link to="/"><FaFacebookF /> </Link>
                <Link to="/"><FaVimeoV /></Link>
                <Link to="/"><FaTwitter /></Link>
                <Link to="/"><FaLinkedinIn /></Link>
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