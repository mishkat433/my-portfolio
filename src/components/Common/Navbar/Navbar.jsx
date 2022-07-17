import React from 'react';
import "./Navbar.css";
import navLogo from "../../../images/mishkat-logo-6.png";
import cv from "../../../CV/mishkat cv update.pdf"

const Navbar = () => {


    return (
        <header className='container-fluid' id='fixed'>
            <nav className="navbar navbar-expand-lg navbar-white ">
                <a className="navbar-brand" href="/">
                    <img className='navLogo' src={navLogo} alt="connection error" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars text"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-uppercase nav-text  text-center">
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link mx-2 " href="https://mishkat433.github.io/my-portfolio/">Home</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link resume" download="Mishkat Cv" href={cv} target="_blank" rel="noopener noreferrer">resume</a>
                        </li>
                    </ul>
                </div>
            </nav >
        </header >
    );
};

export default Navbar;

