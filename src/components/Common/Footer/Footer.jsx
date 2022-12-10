import React from 'react';

const Footer = () => {
    return (
        <div className=' h-32 bg-gray-700 flex items-center justify-center'>
            <h4 className='text-white text-md md:text-lg mt-3'>Copyright &copy; All right reserved by Mishk@t - {new Date().getFullYear()} </h4>
        </div>
    );
};

export default Footer;