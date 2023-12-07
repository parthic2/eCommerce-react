import React, { useState } from 'react';
import { faqDataFirst, faqDataSecond } from '../../Data/Data';

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(faqDataFirst[0].id);
  const [activeItemSec, setActiveItemSec] = useState(faqDataSecond[0].id);

  const toggleAccordion = (itemId) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  const toggleAccordionSec = (itemId) => {
    setActiveItemSec(itemId === activeItemSec ? null : itemId);
  };

  return (
    <div className="tp-faq__area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-team-4__section-box text-center mb-50">
              <span className="tp-gradiant-section-subtitle">
                Customer service management
              </span>
              <h1 className="tp-section-title-3">FAQ</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 mb-50">
            <div className="tp-custom-accordion">
              <div className="accordions" id="accordionExample">
                {faqDataFirst.map((faq) => (
                  <div key={faq.id} className="accordion-items">
                    <h2 className="accordion-header" id={faq.id}>
                      <button
                        className={`accordion-buttons ${faq.id === activeItem ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.colId}`}
                        aria-expanded={faq.id === activeItem ? "true" : "false"}
                        aria-controls={faq.colId}
                        onClick={() => toggleAccordion(faq.colId)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={faq.colId}
                      className={`accordion-collapse collapse ${faq.id === activeItem ? 'show' : ''}`}
                      aria-labelledby={faq.id}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-50">
            <div className="tp-custom-accordion">
              <div className="accordions" id="accordionExample2">
                {faqDataSecond.map((faq) => (
                  <div key={faq.id} className="accordion-items">
                    <h2 className="accordion-header" id={faq.id}>
                      <button
                        className={`accordion-buttons ${faq.id === activeItemSec ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.colId}`}
                        aria-expanded={faq.id === activeItemSec ? "true" : "false"}
                        aria-controls={faq.colId}
                        onClick={() => toggleAccordionSec(faq.colId)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={faq.colId}
                      className={`accordion-collapse collapse ${faq.id === activeItemSec ? 'show' : ''}`}
                      aria-labelledby={faq.id}
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ;