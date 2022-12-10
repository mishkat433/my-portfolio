import React from 'react';
import Typewriter from 'typewriter-effect';
import resume from "../../../CV/MiskatCV.pdf"
import { FaArrowRight, FaCloudDownloadAlt, FaFacebookF, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
    return (
        <div className='h-[60vh] md:h-[93vh] flex items-center' id='home'>
            <div className="text-white w-full">
                <p className='text-2xl mb-2 text-orange-400'>Hello! I am</p>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold mb-10'>Borhan Uddin Mishkat</h1>
                <p className='text-2xl text-orange-400 mb-2'>Full Stack Web Developer</p>

                <div className='flex mb-12 text-2xl gap-3'>
                    <span className=''>Skills in :  </span>
                    <Typewriter className=""
                        options={{
                            strings: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', "jQuery", "React", 'Material Ui', 'Node Js', 'Mongo DB', 'Java'],
                            autoStart: true,
                            loop: true,
                            delay: 150,
                        }}
                    />
                </div>
                <div className="block md:flex justify-between items-center">
                    <div className="w-ful lg:w-1/2 flex lg:block">
                        <a download="Mishkat Resume" href={resume} target="_blank" rel="noopener noreferrer" className="btn bg-orange-500 text-white mr-8 hover:bg-white hover:text-black">Get Resume <FaCloudDownloadAlt className=' text-2xl ml-2' /></a>
                        <button className="btn bg-orange-500 text-white mr-8 hover:bg-white hover:text-black">About me </button>
                    </div>
                    <div className='flex items-center gap-5 w-full md:w-1/2 mt-5 lg:mt-0 text-2xl'>
                        <div className='flex gap-3 items-center'>
                            <h4 className='text-2xl'>CONNECT ME </h4>
                            <FaArrowRight />
                        </div>
                        <div className='flex gap-5'>
                            <a className='text-white hover:text-orange-500 hover:scale-110 duration-300' rel='noopener noreferrer' target="_blank" href="https://www.facebook.com/md.mishkat.501/"><FaFacebookF /></a>
                            <a className='text-white hover:text-orange-500 hover:scale-110 duration-300' rel='noopener noreferrer' target="_blank" href="https://www.linkedin.com/in/md-mishkat-b050b71bb"><FaLinkedinIn /></a>
                            <a className='text-white hover:text-orange-500 hover:scale-110 duration-300' rel='noopener noreferrer' target="_blank" href="https://github.com/mishkat433"><FaGithubAlt /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Intro;