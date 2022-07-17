import React from 'react';
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer pt-4' >
            <p className='text-center pt-5'><a href="https://github.com/mishkat433/my-portfolio" target="blank"
                className='text-warning text-decoration-none '>&#9733;  Star</a> &nbsp; Developed By Me - {new Date().getFullYear()}</p>

            <ScrollUpButton className="togle-up"
                ToggledStyle={{ right: 20 }}
                ShowAtPosition={140}
                AnimationDuration={1000} />
        </div>
    );
};

export default Footer;