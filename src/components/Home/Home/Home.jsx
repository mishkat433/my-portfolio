import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';
import "./Home.css"

const Home = () => {
    return (
        <div className='full-background'>
            <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            
        </div>
    );
};

export default Home;