import React from 'react';
import { chooseUsData } from '../../Data/Data';

const ChooseUs = () => {
  return (
    <div className="tp-choose-6__area pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-choose-6__section-box text-center mb-50">
              <span className="tp-gradiant-section-subtitle">Why Choose us</span>
              <h1 className="tp-section-title-3">
                Why {" "}
                <span className="p-relative">
                  Choose Us
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          {chooseUsData.map((item) => (
            <div
              key={item.id}
              className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow tpfadeUp`}
              data-wow-duration=".9s"
              data-wow-delay={`.${item.id * 2 - 1}s`}
            >
              <div className={`tp-choose-6__item-wrap${item.id % 2 === 0 ? ' space' : ''}`}>
                <div className="tp-choose-6__item">
                  <div className="tp-choose-6__icon">
                    <span>{item.icon}</span>
                  </div>
                  <div className="tp-choose-6__content">
                    <h6 className="tp-choose-6__title">{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseUs;