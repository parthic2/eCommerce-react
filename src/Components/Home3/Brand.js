import React from 'react';
import { Link } from 'react-router-dom';
import brand1 from '../../Assets/img/brand/brand-5-1.png';
import brand2 from '../../Assets/img/brand/brand-5-2.png';
import brand3 from '../../Assets/img/brand/brand-5-3.png';
import brand4 from '../../Assets/img/brand/brand-5-4.png';
import brand5 from '../../Assets/img/brand/brand-5-5.png';
import brand6 from '../../Assets/img/brand/brand-5-6.png';
import brand7 from '../../Assets/img/brand/brand-5-7.png';
import brand8 from '../../Assets/img/brand/brand-5-8.png';
import brand9 from '../../Assets/img/brand/brand-5-9.png';

const Brand = () => {
  const brandSections = [
    [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand4, brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8],
    [brand3, brand9, brand8, brand7, brand6, brand5, brand4, brand3, brand2, brand1, brand6, brand9, brand8, brand7, brand6, brand5, brand4, brand3],
    [brand5, brand6, brand7, brand8, brand9, brand6, brand1, brand2, brand3, brand4, brand5, brand9, brand8, brand6, brand4, brand3, brand2, brand1],
  ];

  return (
    <section className="rbt-elements-presentation-area overflow-hidden bg-color-white rbt-section-gapBottom pb-80">
      <div className="wrapper">
        <div className="scroll-animation-all-wrapper">
          {brandSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={`scroll-animation-wrapper mt-30 `}>
              <div className={`scroll-animation ${sectionIndex % 2 === 0 ? 'scroll-right-left' : 'scroll-left-right'}`}>
                <div className="single-column-100">
                  <div className="rbt-categori-list">
                    {section.map((brandImage, index) => (
                      <Link key={index} to="/Home3">
                        <img
                          src={brandImage}
                          alt="brand"
                          className="img-fluid"
                          width="151"
                          height="57"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;