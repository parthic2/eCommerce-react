import { useEffect, useState } from "react";

export const useScrollNavbar1 = () => {
    const [, setScroll] = useState(window.scrollY);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const newScroll = window.scrollY;
            setScroll(newScroll);

            const headerSticky = document.getElementById('header-sticky');

            if (newScroll < 100) {
                // Remove the "header-sticky" class
                setIsHeaderSticky(false);
                // Remove
                headerSticky.style.display = 'block';
            } else {
                // Add the "header-sticky" class
                setIsHeaderSticky(true);
                // Add
                headerSticky.style.display = "block";
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // For Open Category menu
    useEffect(() => {
        const handleClick = (event) => {
            const categoryMenuNav = document.querySelector(".tp-category-menu > nav > ul");

            // Handle click events using event delegation
            if (event.target.classList.contains("tp-category-menu-toggle")) {
                // Toggle menu visibility when the toggle button is clicked
                categoryMenuNav.style.display = categoryMenuNav.style.display === "block" ? "none" : "block";
            } else if (event.target.tagName === "LI" && categoryMenuNav.contains(event.target)) {
                // Handle click on menu items
                categoryMenuNav.style.display = "none"; // Hide menu after selecting an item
            } else {
                // Handle clicks outside the menu by closing the menu
                categoryMenuNav.style.display = "none";
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            // Clean up event listener on component unmount
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const handleSidebarOpen = () => {
        setIsSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    return { isHeaderSticky, isSidebarOpen, handleSidebarOpen, handleSidebarClose };
}

export const useScrollNavbar2 = () => {
    const [, setScroll] = useState(window.scrollY);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const newScroll = window.scrollY;
            setScroll(newScroll);

            const headerSticky = document.getElementById('header-sticky');

            if (newScroll < 100) {
                // Remove the "header-sticky" class
                setIsHeaderSticky(false);
                // Remove
                headerSticky.style.display = 'block';
            } else {
                // Add the "header-sticky" class
                setIsHeaderSticky(true);
                // Add
                headerSticky.style.display = "block";
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSidebarOpen = () => {
        setIsSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    return { isHeaderSticky, isSidebarOpen, handleSidebarOpen, handleSidebarClose };
};