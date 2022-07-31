import React from 'react';

const LoveCard = ({ cardData }) => {

    return (
        <div className=" full-card ">
            <div className="card-img-top icon">
                <i className={cardData.icon} ></i>
            </div>
            <div className="card-body titl" >
                <h5 className="card-title text-center" >{cardData.heading} </h5 >
            </div >
        </div >
    );
};

export default LoveCard;