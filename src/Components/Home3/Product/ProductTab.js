import React from 'react';

const ProductTab = () => {
  return (
    <div className="col-xl-12">
      <div className="tp-fea-product__tab mb-35">
        <nav>
          <div
            className="nav nav-tab justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link"
              id="nav-Bags-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Bags"
              data-animation="slide-in"
              type="button"
              role="tab"
              aria-controls="nav-Bags"
              aria-selected="false"
            >
              Bags & Footwear
            </button>
            <button
              className="nav-link active"
              id="nav-Women-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Women"
              data-animation="slide-in"
              type="button"
              role="tab"
              aria-controls="nav-Women"
              aria-selected="true"
            >
              Women Ethnic
            </button>
            <button
              className="nav-link"
              id="nav-Men-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Men"
              data-animation="slide-in"
              type="button"
              role="tab"
              aria-controls="nav-Men"
              aria-selected="false"
            >
              Men's wear
            </button>
            <button
              className="nav-link"
              id="nav-Kids-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Kids"
              data-animation="slide-in"
              type="button"
              role="tab"
              aria-controls="nav-Kids"
              aria-selected="false"
            >
              Kid's wear
            </button>
            <button
              className="nav-link"
              id="nav-Beauty-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Beauty"
              data-animation="slide-in"
              type="button"
              role="tab"
              aria-controls="nav-Beauty"
              aria-selected="false"
            >
              Beauty & Health
            </button>
            <button
              className="nav-link"
              id="nav-Jewelry-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Jewelry"
              data-animation="slide-in"
              type="button"
              role="tab"
              aria-controls="nav-Jewelry"
              aria-selected="false"
            >
              Jewelry & Accessories
            </button>
            <button
              className="nav-link"
              id="nav-Western-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Western"
              data-animation="slide-in"
              type="button"
              role="tab"
              aria-controls="nav-Western"
              aria-selected="false"
            >
              Women Western
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default ProductTab;