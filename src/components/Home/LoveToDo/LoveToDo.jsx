import React from 'react';
import SectionHead from '../../Common/SectionHead/SectionHead';
import "./LoveToDo.css"
import LoveCard from './Todo-card/LoveCard';

const LoveCardData = [
    {
        id: "1",
        icon: "fa-solid fa-laptop-code",
        heading: "Codding"
    },
    {
        id: "2",
        icon: "fa-solid fa-plane-departure",
        heading: "Travelling"
    },
    {
        id: "3",
        icon: "fa-solid fa-person-hiking",
        heading: "Mountain Hiking"
    },
    {
        id: "4",
        icon: "fa-solid fa-person-swimming",
        heading: "Swimming"
    }
]

const LoveToDo = () => {
    return (
        <section className="container full-love">
            <div id='skills'>
                <SectionHead title={"Love To Do"}></SectionHead>
            </div>
            <div className="todo-card">
                {
                    LoveCardData.map(data => <LoveCard cardData={data} key={data.id}></LoveCard>)
                }
            </div>
        </section>
    );
};

export default LoveToDo;