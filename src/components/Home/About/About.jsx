import React from 'react';
import SectionHead from '../../Common/SectionHead/SectionHead';
import Picture from "../../../images/my-pic.JPG";
import GetResume from '../../Common/GetResume';
import ScrollToButton from '../../Common/ScrollToButton';

const About = () => {
    return (
        <section className='text-white md:h-[93vh] mb-20 md:mb-0 w-11/12 mx-auto' id='about'>
            <SectionHead title={"About me"}></SectionHead>
            <div className="flex flex-col-reverse md:flex-row gap-10 items-center mt-20">
                <div className="w-full md:w-3/5 ">
                    <p className='text-lg w-full md:w-4/5 text-justify select-none text-black'>Hello! I am Borhan Uddin Mishkat, a passionate software Developer based on full stack web development.
                        I like to solve any complex problem. I love learning programming all the time. My goal is to one day i can be a good programmer.
                        I am available for any type of job opportunity that suits my interests.</p>
                    <div className="w-ful lg:w-1/2 flex gap-4 mt-10">
                        <GetResume />
                        <ScrollToButton href="#project" btnName='Projects' />
                    </div>
                </div>
                <div className="w-full md:w-2/5 md:hover:scale-110 duration-700 md:grayscale-[70%] hover:grayscale-0">
                    <img className='h-[380px] w-full md:w-4/5 rounded-lg ' src={Picture} alt="connection error" title='Mishkat Picture' />

                </div>
            </div>
        </section>
    );
};

export default About;