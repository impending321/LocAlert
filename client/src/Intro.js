import React from "react";
import About from "./About";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";

function Intro() {
    return (
        <>
            <Navbar/>
            <About />
            <LandingPage />
            <Marquee/>
            <Testimonials/>
            <Footer/>
        </>
    )
}
export default Intro;