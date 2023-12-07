import React from 'react';
import { FaXmark } from "react-icons/fa6";
import Sidebar from '../Sidebar/Sidebar';
import { useScrollNavbar1 } from '../../../Hooks/useScrollnavbar1';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

const Header = () => {
  const { isHeaderSticky, isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useScrollNavbar1();

  return (
    <>
      {isSidebarOpen && (
        <div className="tpoffcanvas-area">
          <div className={`tpoffcanvas ${isSidebarOpen ? 'opened' : ''}`}>
            <div className="tpoffcanvas__close-btn">
              <button className="close-btn" onClick={handleSidebarClose}>
                <i><FaXmark /></i>
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
      {isSidebarOpen && <div className="body-overlay apply" onClick={handleSidebarClose}></div>}

      <header className="tp-header-wrap">
        <TopHeader />
        <BottomHeader isHeaderSticky={isHeaderSticky} handleSidebarOpen={handleSidebarOpen} />
      </header>
    </>
  )
}

export default Header;