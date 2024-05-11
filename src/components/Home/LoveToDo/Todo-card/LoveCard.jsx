import React from 'react';

const LoveCard = ({ cardData }) => {

    return (
        <div className="card shadow-xl bg-yellow2  rounded-md p-3 cursor-pointer hover:scale-110 duration-300 group hover:-translate-y-4" >
            <figure className='text-red text-7xl group-hover:-scale-x-100 ' data-aos="flip-left">{cardData.icon}</figure>
            <div className="card-body">
                <h5 className="text-center text-red uppercase" >{cardData.heading} </h5 >
            </div>
        </div>
    );
};

export default LoveCard;