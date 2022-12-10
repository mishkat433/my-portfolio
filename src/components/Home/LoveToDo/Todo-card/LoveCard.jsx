import React from 'react';

const LoveCard = ({ cardData }) => {

    return (
        <div className="card shadow-xl bg-[#102649e9] rounded-md p-3 cursor-pointer hover:scale-110 duration-300" >
            <figure className='text-orange-500 text-7xl' data-aos="flip-left">{cardData.icon}</figure>
            <div className="card-body">
                <h5 className="text-center uppercase" >{cardData.heading} </h5 >
            </div>
        </div>
    );
};

export default LoveCard;