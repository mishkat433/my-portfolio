import React from 'react';
import "./SectionHead.css";

const SectionHead = ({ title }) => {
    return (
        <div >
            <h3 className='sectionHead'>{title}</h3>
        </div>
    );
};

export default SectionHead;