import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaVimeoV } from 'react-icons/fa6';

const CopyRight = () => {
  return (
    <div className="tp-copyright__area grey-bg tp-copyright__border">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
            <div className="tp-copyright__wrapper d-flex align-items-center justify-content-sm-between justify-content-center">
              <div className="tp-copyright__social-box d-none d-lg-block">
                <Link to="/Home3"><FaFacebookF /> </Link>
                <Link to="/Home3"><FaVimeoV /></Link>
                <Link to="/Home3"><FaTwitter /></Link>
                <Link to="/Home3"><FaLinkedinIn /></Link>
              </div>
              <div className="tp-copyright__text text-center">
                <span>Full Copyright & Design By <i>@eSolution</i> – 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRight;