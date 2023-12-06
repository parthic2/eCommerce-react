import React from 'react';
import BestSeller from './BestSeller';
import TopSeller from './TopSeller';
import NewArrive from './NewArrive';
import TopRating from './TopRating';

const TrendsContent = () => {
  return (
    <div className="tab-content" id="nav-tabContent">
      <div
        className="tab-pane show active zoom-in"
        id="nav-Cards"
        role="tabpanel"
        aria-labelledby="nav-Cards-tab"
        tabIndex="0"
      >
        <BestSeller />
      </div>
      <div
        className="tab-pane zoom-in"
        id="nav-Books"
        role="tabpanel"
        aria-labelledby="nav-Books-tab"
        tabIndex="0"
      >
        <TopSeller />
      </div>
      <div
        className="tab-pane zoom-in"
        id="nav-Cloths"
        role="tabpanel"
        aria-labelledby="nav-Cloths-tab"
        tabIndex="0"
      >
        <NewArrive />
      </div>
      <div
        className="tab-pane zoom-in"
        id="nav-Invitation"
        role="tabpanel"
        aria-labelledby="nav-Invitation-tab"
        tabIndex="0"
      >
        <TopRating />
      </div>
    </div>
  )
}

export default TrendsContent;