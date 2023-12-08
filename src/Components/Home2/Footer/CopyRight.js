import React from 'react';
import { Link } from 'react-router-dom';
import card from "../../../Assets/img/footer/footer-2-1.png";

const CopyRight = () => {
  return (
    <div className="tp-copyright-2__area black-bg-2">
      <div className="container">
        <div className="tp-copyright-2__bdr">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-copyright-2__text text-center text-md-start">
                <span>
                  <strong>© 2023</strong> Powered by eSolution . All Rights
                  Reserved.
                </span>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-copyright-2__thumb text-end d-none d-md-block">
                <Link to="/Home2">
                  <img
                    src={card}
                    alt="card"
                    className="img-fluid"
                    width="333"
                    height="28"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRight;