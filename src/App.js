import { Suspense, useEffect, useState } from 'react';
import './Assets/css/Style.css';
import './Assets/css/spacing.css';
import './Assets/css/animation.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Routes';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import loader from "./Assets/img/preloader/loading-2.gif";

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const [loaderVisible, setLoaderVisible] = useState(true);

  // For Preloader
  useEffect(() => {
    // Simulate a delay of 1000ms (1 second)
    const delay = 1500;

    // After the delay, hide the loader and show the header
    const timeoutId = setTimeout(() => {
      setLoaderVisible(false);

      // Show the header after the preloader is hidden
      // document.getElementById("header-sticky").style.display = "block";
    }, delay);

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // For Top to bottom button
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const newScrollValue = Math.round((pos * 100) / calcHeight);

      setScrollValue(newScrollValue);

      if (pos > 100) {
        document.getElementById('progress').style.display = 'grid';
      } else {
        document.getElementById('progress').style.display = 'none';
      }
    };

    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
    };

    window.addEventListener('scroll', handleScroll);
    document.getElementById('progress').addEventListener('click', scrollToTop);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.getElementById('progress').removeEventListener('click', scrollToTop);
    };
  }, []);

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
