import { Suspense } from 'react';
import './Assets/css/Style.css';
import './Assets/css/spacing.css';
import './Assets/css/animation.css';
import { ApiRoutes } from './Routes';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import loader from "./Assets/img/preloader/loading-2.gif";
import useLoader from './Hooks/useLoader';

function App() {
  const { showPreloader, scrollValue } = useLoader();

  return (
    <>
      {/* <!-- Preloader start --> */}
      {showPreloader && (
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
        <ApiRoutes />
      </Suspense>
    </>
  );
}

export default App;