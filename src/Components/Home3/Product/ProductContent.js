import React from 'react';
import ProductBag from './ProductBag';
import ProductWomen from './ProductWomen';
import ProductMens from './ProductMens';
import ProductKids from './ProductKids';
import ProductBeautyHealth from './ProductBeautyHealth';
import ProductAccessories from './ProductAccessories';
import ProductWomenWestern from './ProductWomenWestern';

const ProductContent = () => {
  return (
    <div className="tab-content" id="nav-tabContent">
      <div
        className="tab-pane slide-in"
        id="nav-Bags"
        role="tabpanel"
        aria-labelledby="nav-Bags-tab"
        tabIndex="0"
      >
        <ProductBag />
      </div>
      <div
        className="tab-pane show active slide-in"
        id="nav-Women"
        role="tabpanel"
        aria-labelledby="nav-Women-tab"
        tabIndex="0"
      >
        <ProductWomen />
      </div>
      <div
        className="tab-pane slide-in"
        id="nav-Men"
        role="tabpanel"
        aria-labelledby="nav-Men-tab"
        tabIndex="0"
      >
        <ProductMens />
      </div>
      <div
        className="tab-pane slide-in"
        id="nav-Kids"
        role="tabpanel"
        aria-labelledby="nav-Kids-tab"
        tabIndex="0"
      >
        <ProductKids />
      </div>
      <div
        className="tab-pane slide-in"
        id="nav-Beauty"
        role="tabpanel"
        aria-labelledby="nav-Beauty-tab"
        tabIndex="0"
      >
        <ProductBeautyHealth />
      </div>
      <div
        className="tab-pane slide-in"
        id="nav-Jewelry"
        role="tabpanel"
        aria-labelledby="nav-Jewelry-tab"
        tabIndex="0"
      >
        <ProductAccessories />
      </div>
      <div
        className="tab-pane slide-in"
        id="nav-Western"
        role="tabpanel"
        aria-labelledby="nav-Western-tab"
        tabIndex="0"
      >
        <ProductWomenWestern/>
      </div>
    </div>
  )
}

export default ProductContent;