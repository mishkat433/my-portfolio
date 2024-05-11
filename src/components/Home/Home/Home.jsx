import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import LoveToDo from '../LoveToDo/LoveToDo';
import Projects from '../projects/Projects';
// import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='bg-main-bg bg-repeat bg-cover bg-center'>

            <Intro />
            <About />
            {/* <Skills></Skills> */}
            <LoveToDo />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;