import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-[#102649e9] '>
            <div className='w-11/12 mx-auto flex items-center justify-center  h-32'>
                <h4 className='text-white text-md md:text-lg mt-3'>Copyright &copy; All right reserved by Mishk@t - {new Date().getFullYear()} </h4>
            </div>
        </div>
    );
};

export default Footer;