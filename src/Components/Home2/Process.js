import React from 'react';
import { processItems } from '../../Data/Data';

const Process = ({ processRef }) => {
  return (
    <div id="process" ref={processRef} className="tp-feature-5__area tp-feature-5__space">
      <div className="container custom-container-4">
        <div className="tp-feature-5__border">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-1 row-cols-sm-2">
            {processItems.map((item, index) => (
              <div key={index} className="col">
                <div className="tp-feature-5__item-box d-flex align-items-center">
                  <div className="tp-feature-3__icon">
                    <span>
                      <img src={item.icon} alt={item.title} />
                    </span>
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