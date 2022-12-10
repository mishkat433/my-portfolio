import React from 'react';
import logo from "../../../images/mishkat-logo-6.png";
import cv from "../../../CV/MiskatCV.pdf";

const Navbar = () => {

    const menuItems = <>
        <li><a href='#home' className='text-white'>Home</a></li>
        <li><a href='#about' className='text-white' >About</a></li>
        <li><a href='#project' className='text-white' >Project</a></li>
        <li><a href='#contact' className='text-white'>Contact</a></li>
    </>
    return (
        <div className='bg-[#28283ead] sticky top-0 z-20'>
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a href='#home' className="flex items-center text-xl md:text-3xl gap-1 md:gap-3 font-semibold">
                        <img className='w-14 md:w-16' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a download="Mishkat Resume" href={cv} target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline border-orange-400 text-white hover:bg-orange-500 duration-300">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;