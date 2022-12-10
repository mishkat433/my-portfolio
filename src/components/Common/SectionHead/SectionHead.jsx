import React from 'react';
import "./SectionHead.css";

const SectionHead = ({ title }) => {
    return (
        <div className='flex justify-center items-center select-none' data-aos="flip-up">
            <span className='w-1/5 md:w-1/5 bg-gray-500 h-[1px]'></span>
            <h3 className='bg-[#102649e9] shadow-md shadow-[#325d99e9] px-4 rounded-md py-1 text-xl uppercase text-white'>{title}</h3>
            <span className='w-1/5 md:w-1/5 bg-gray-500 h-[1px]'></span>
        </div>
    );
};

export default SectionHead;