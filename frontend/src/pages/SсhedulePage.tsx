import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function SchedulePage() {
    return (
        <div>
            <Header/>
            <ScrollToTopButton/>
            <Footer/>
        </div>
    );
}

export default SchedulePage;