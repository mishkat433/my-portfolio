import React from 'react';
import "./Intro.css";
import Typewriter from 'typewriter-effect';
import cv from "../../../CV/mishkat cv update.pdf"

const Intro = () => {
    return (
        <div className='container'>
            <div className="intro ">
                <p className='text mb-0 intro-top'>Hello! I am</p>
                <h1 className='intro-heading'>Borhan uddin mishkat</h1>
                <p className='intro-bottom text mt-3'>Full Stack Web Developer</p>

                <span className='intro-top'>Skills in :  </span>
                <Typewriter className="typewriter"
                    options={{
                        strings: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', "jQuery", 'Meterial Ui', 'Node Js', 'Mongo DB', 'Java'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                    }}
                />
                <div className="intro-footer mt-lg-5">
                    <a className='btn getResume mr-4' href={cv} download="Mishkat Cv">Get Resume<i className="fa-solid fa-cloud-arrow-down ml-2"></i></a>
                    <a className='btn getAbout' href="#about">About Me</a>

                    <div className=' text ml-lg-4 connect'>CONNECT ME <i className="fa-solid fa-arrow-right-long text ml-2 mr-1"></i>
                        <a className='connect-icon ml-4' rel='noopener noreferrer' target="_blank" href="https://www.facebook.com/md.mishkat.501/"><i className="fa-brands fa-facebook-f"></i></a>
                        <a className='connect-icon' rel='noopener noreferrer' target="_blank" href="/"><i className="fa-brands fa-twitter"></i></a>
                        <a className='connect-icon' rel='noopener noreferrer' target="_blank" href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a className='connect-icon' rel='noopener noreferrer' target="_blank" href="https://github.com/mishkat433"><i className="fa-brands fa-github"></i></a>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Intro;