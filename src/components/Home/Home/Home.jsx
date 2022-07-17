import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import LoveToDo from '../LoveToDo/LoveToDo';
import Portfolio from '../Portfolio/Portfolio';
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
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;