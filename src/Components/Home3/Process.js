import React from 'react';
import { process } from '../../Data/Data';

const Process = () => {
  return (
    <div className="tp-feature-3__area pt-30 pb-55">
      <div className="tp-feature-3__plr">
        <div className="container-fluid g-0">
          <div className="row">
            {process.map((item, index) => (
              <div key={index} className={`col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30`}>
                <div className={`tp-feature-3__item item-border-${index + 1} d-flex align-items-start`}>
                  <div className="tp-feature-3__icon">
                    <span>{item.icon}</span>
                  </div>
                  <div className="tp-feature-3__text">
                    <h1>{item.title}</h1>
                    <span>{item.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process;