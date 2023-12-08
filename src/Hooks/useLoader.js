import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useLoader = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const [showPreloader, setShowPreloader] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setShowPreloader(false);
        }, 5000);

    }, [location.pathname]);

    // Check if the current location has changed and show the preloader if it has
    useEffect(() => {
        setShowPreloader(true);
    }, [location.pathname]);

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

    return { showPreloader, scrollValue }
}

export default useLoader;