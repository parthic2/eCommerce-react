import React from 'react';
import { Demand } from '../../../svg/svg';

const MapSection = () => {
  return (
    <div className="tp-footer-2__widget footer-col-8">
      <h1 className="tp-footer-2__widget-title">Our Location</h1>
      <div className="tp-footer-2__location">
        <iframe
          width="600"
          height="450"
          title="map"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(vnsgu)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="tp-footer-2__text">
        <Demand />
        <span>
          We provide fast on-demand {" "}
          <strong>printing.</strong>
        </span>
      </div>
    </div>
  )
}

export default MapSection;
