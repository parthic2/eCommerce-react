import { Suspense } from 'react';
import './Assets/css/Style.css';
import './Assets/css/spacing.css';
import './Assets/css/animation.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Routes';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import loader from "./Assets/img/preloader/loading-2.gif";
import useLoader from './Hooks/useLoader';

function App() {
  const { loaderVisible, scrollValue } = useLoader();

  return (
    <>
      {/* <!-- Preloader start --> */}
      {loaderVisible && (
        <div id="preloader">
          <img src={loader} alt="loader" />
        </div>
      )}
      {/* <!-- Preloader end --> */}

      {/* <!-- back-to-top-start  --> */}
      <div
        id="progress"
        className="scroll-top scroll-to-target"
        data-target="html"
        style={{
          background: `conic-gradient(#7d2eff ${scrollValue}%, #ffffff ${scrollValue}%)`,
          display: 'none', // Initially hide the button
        }}
      >
        <div id="progress-value">
          <MdKeyboardDoubleArrowUp />
        </div>
      </div>
      {/* <!-- back-to-top-end  --> */}

      <Suspense>
        <RouterProvider router={Router} />
      </Suspense>
    </>
  );
}

export default App;