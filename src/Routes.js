import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./Components/Home1/RootLayout";
import HomeRoot from "./Components/Home2/HomeRoot";
import Home3Root from "./Components/Home3/RootLayout";
const Index = lazy(() => import("./Components/Home1/Index"));
const HomeIndex = lazy(() => import("./Components/Home2/Index"));
const Home3Index = lazy(() => import("./Components/Home3/Index"));
const Service = lazy(() => import("./Pages/Service/Service"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const About = lazy(() => import("./Pages/About/About"));

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{ path: "/", element: <Index /> }],
    },
    {
        path: "/Home2",
        element: <HomeRoot />,
        children: [{ path: "/Home2", element: <HomeIndex /> }]
    },
    {
        path: "/Home3",
        element: <Home3Root />,
        children: [{ path: "/Home3", element: <Home3Index /> }]
    },
    {
        path: "/About",
        element: <About />
    },
    {
        path: "/Service",
        element: <Service />
    },
    {
        path: "/Contact",
        element: <Contact />
    },
]);