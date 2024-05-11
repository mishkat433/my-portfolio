import React from 'react';
import Typewriter from 'typewriter-effect';
import "./intro.css"
import { FaArrowRight, FaFacebookF, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import GetResume from '../../Common/GetResume';
import ScrollToButton from '../../Common/ScrollToButton';
import shape1 from "../../../images/shape1.png"

const Intro = () => {
    return (
        <div className='h-[60vh] md:h-[93vh] flex items-center  w-11/12 mx-auto mb-10 md:mb-0 relative ' >
            <img src={shape1} alt="shape" className='absolute -top-4 -left-8 rotate-90 -z-10 ' />
            {/* <div className='opacity-10 absolute top-20 ' id='cut-diamond'></div> */}
            <div className="text-center w-full">
                <h1 class="text-4xl md:text-5xl lg:text-8xl mb-1 md:mb-4 font-light text-black text-center">Hello!</h1>
                <h1 class="text-4xl md:text-5xl lg:text-8xl font-semibold text-red mb-8 ">I'am Mishkat</h1>
                <p class="text-2xl text-orange-500 mb-2 text-red"><abbr title="MongoDB, ExpressJs, ReactJs, NodeJs,">MERN</abbr> & <abbr title="PostgreSql, ExpressJs, ReactJs, NodeJs,">PERN</abbr> Stack Web Developer</p>
                <div className='flex justify-center mb-12 text-2xl gap-3 text-black'>
                    <span className=''>Skills in :  </span>
                    <Typewriter className=""
                        options={{
                            strings: ['HTML', 'CSS', 'Bootstrap', "Tailwind CSS", 'JavaScript', "jQuery", "React Js", 'Next Js', 'Node Js', 'express Js', 'Mongo DB', 'mongoose', 'Java'],
                            autoStart: true,
                            loop: true,
                            delay: 150,
                        }}
                    />
                </div>
                <div className="block md:flex justify-center items-center">
                    <div class="w-ful flex flex-row justify-center">
                        <GetResume />
                        <ScrollToButton href="#about" btnName="About Me" />
                    </div>

                    <div class="flex items-center gap-5 mt-5 lg:mt-0 text-2xl">
                        <div class="flex gap-3 items-center">
                            <h4 className="text-2xl text-black">JOIN WITH ME </h4>
                            <FaArrowRight className='text-xl text-red' />
                        </div>
                        <div class="flex gap-5">
                            <a title='facebook' className='text-sec-red hover:text-red duration-300 hover:scale-105' href="https://www.facebook.com/md.mishkat.433/" target='_blank' rel="noreferrer" ><FaFacebookF /> </a>
                            <a title='linkedin' className='text-sec-red hover:text-red duration-300 hover:scale-105' href="https://www.linkedin.com/in/md-mishkat-b050b71bb" target='_blank' rel="noreferrer" ><FaLinkedinIn /> </a>
                            <a title='github' className='text-sec-red hover:text-red duration-300 hover:scale-105' href="https://github.com/mishkat433" target='_blank' rel="noreferrer" > <FaGithubAlt /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;