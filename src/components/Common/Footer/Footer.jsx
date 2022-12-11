import React from 'react';
// import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const Footer = () => {
    return (
        <div className=' bg-[#102649e9] '>
            <div className='w-11/12 mx-auto flex items-center justify-center  h-32'>
                <p className='text-white'><a href="https://github.com/mishkat433/my-portfolio" target="blank"
                    className='text-orange-400 text-decoration-none '>&#9733;  Star</a> &nbsp; Developed By Mishk@t - {new Date().getFullYear()}</p>
            </div>
            {/* <ScrollUpButton className="togle-up"
                ToggledStyle={{ right: 20 }}
                ShowAtPosition={140}
                AnimationDuration={1000} /> */}
        </div>
    );
};

export default Footer;