import React from 'react';
import "./SectionHead.css";
import shape2 from "../../../images/shape2.png"

const SectionHead = ({ title }) => {
    return (
        <div className='flex justify-center items-center select-none relative' data-aos="flip-up">
            {/* <span className='w-1/5 md:w-1/5 bg-sec-red h-[1px]'></span> */}
            <h3 className='bg-red shadow-md shadow-sec-red px-4 rounded-md py-1 text-xl uppercase text-white'>{title}</h3>
            <img src={shape2} alt="" className='absolute -z-10' />
            {/* <span className='w-1/5 md:w-1/5 bg-sec-red h-[1px]'></span> */}
        </div>
    );
};

export default SectionHead;