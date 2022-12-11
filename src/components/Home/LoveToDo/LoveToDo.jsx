import React from 'react';
import { FaHiking, FaLaptopCode, FaPlaneDeparture, FaSwimmer } from 'react-icons/fa';
import SectionHead from '../../Common/SectionHead/SectionHead';
import LoveCard from './Todo-card/LoveCard';

const LoveCardData = [
    {
        id: "1",
        icon: <FaLaptopCode />,
        heading: "Codding"
    },
    {
        id: "2",
        icon: <FaPlaneDeparture />,
        heading: "Travelling"
    },
    {
        id: "3",
        icon: <FaHiking />,
        heading: "Mountain Hiking"
    },
    {
        id: "4",
        icon: <FaSwimmer />,
        heading: "Swimming"
    }
]

const LoveToDo = () => {
    return (
        <section className="text-white w-11/12 mx-auto">
            <div id='skills'>
                <SectionHead title={"Love To Do"}></SectionHead>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-20">
                {
                    LoveCardData.map(data => <LoveCard cardData={data} key={data.id}></LoveCard>)
                }
            </div>
        </section>
    );
};

export default LoveToDo;