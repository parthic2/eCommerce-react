import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const RootLayout = lazy(() => import("./Components/Home1/RootLayout"));
const HomeRoot = lazy(() => import("./Components/Home2/HomeRoot"));
const Home3Root = lazy(() => import("./Components/Home3/RootLayout"));
const Index = lazy(() => import("./Components/Home1/Index"));
const HomeIndex = lazy(() => import("./Components/Home2/Index"));
const Home3Index = lazy(() => import("./Components/Home3/Index"));
const Service = lazy(() => import("./Pages/Service/Service"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const About = lazy(() => import("./Pages/About/About"));

export const ApiRoutes = () => (
    <Routes>
        <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />
        </Route>
        <Route element={<HomeRoot />}>
            <Route path="/Home2" element={<HomeIndex />} />
        </Route>
        <Route element={<Home3Root />}>
            <Route path="/Home2" element={<Home3Index />} />
        </Route>
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
    </Routes>
)