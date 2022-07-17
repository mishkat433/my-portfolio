import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import About from '../About/About';
import Intro from '../Intro/Intro';
import LoveToDo from '../LoveToDo/LoveToDo';
import Skills from '../Skills/Skills';
import "./Home.css"

const Home = () => {
    return (
        <div className='full-background'>
            <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <LoveToDo></LoveToDo>

        </div>
    );
};

export default Home;