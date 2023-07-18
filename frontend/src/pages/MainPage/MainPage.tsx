import React from 'react';
import Header from '../components/header/Header';
import Main from "./main/Main";
import Tables from './tables/Tables';
import About_Studio from './about_studio/About_Studio'
import Our_Program from './our_program/Our_Program'
import Footer from '../components/footer/Footer';

function MainPage() {
    return (
        <div>
            <Header/>
            <Main/>
            <About_Studio/>
            <Tables/>
            <Our_Program/>
            <Footer/>
        </div>
    );
}

export default MainPage;