import { useEffect, useState } from "react";

const useLoader = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const [loaderVisible, setLoaderVisible] = useState(true);

    // For Preloader
    useEffect(() => {
        // Simulate a delay of 1000ms (1 second)
        const delay = 1500;

        // After the delay, hide the loader and show the header
        const timeoutId = setTimeout(() => {
            setLoaderVisible(false);
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

    return { loaderVisible, scrollValue }
}

export default useLoader;