import React from 'react';
import SectionHead from '../../Common/SectionHead/SectionHead';
import "./About.css";
import Picture from "../../../images/my-pic.JPG";
import cv from "../../../CV/mishkat cv update.pdf"

const About = () => {
    return (
        <section className='container' id='about'>
            <SectionHead title={"About me"}></SectionHead>
            <div className="row full-about">
                <div className="col-lg-6 ">
                    <p className='about-me '>Hello! I am Borhan Uddin Mishkat, a passionate software engineer based on full stack web development.
                        I am a student of Programming Hero (6th base). I like to solve any complex problem. I love learning programming all the time. My goal is to one day i can be a good programmer.
                        I am available for any type of job opportunity that suits my interests.</p>
                    <div className="mt-5">
                        <a className='btn getResume mr-4' download="mishkatCv.pdf" href={cv} >Get Resume<i className="fa-solid fa-cloud-arrow-down ml-2"></i></a>
                        <a className='btn getAbout text-capitalize' href="#skills">my skills</a>
                    </div>
                </div>
                <div className="col-lg-6  pic">
                    {/* <div className="pic ml-lg-5"> */}
                    <img className='my-pic ml-lg-5' src={Picture} alt="connection error" title='Mishkat Picture' />
                    {/* </div> */}

                </div>
            </div>
        </section>
    );
};

export default About;