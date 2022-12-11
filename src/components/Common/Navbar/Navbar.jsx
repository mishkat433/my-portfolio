import React from 'react';
import logo from "../../../images/mishkat-logo-6.png";
import cv from "../../../CV/MiskatCV.pdf";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <li><NavLink to='/home' className={({ isActive }) => isActive ? 'text-white border-orange-500 border-b-2' : 'text-white hover:border-orange-500 hover:border-b-2'}>Home</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-white border-orange-500 border-b-2' : 'text-white hover:border-orange-500 hover:border-b-2'} >About</NavLink></li>
        <li><NavLink to='/project' className={({ isActive }) => isActive ? 'text-white border-orange-500 border-b-2' : 'text-white hover:border-orange-500 hover:border-b-2'} >Project</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white border-orange-500 border-b-2' : 'text-white hover:border-orange-500 hover:border-b-2'}>Contact</NavLink></li>
        <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-white border-orange-500 border-b-2' : 'text-white hover:border-orange-500 hover:border-b-2'}>Blog</NavLink></li>
    </>
    return (
        <div className=' bg-gradient-to-b from-[#1b2a42] to-[#0a192ff8] sticky top-0 z-20'>
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
                    <Link to='/' className="flex items-center text-xl md:text-3xl gap-1 md:gap-3 font-semibold">
                        <img className='w-14 md:w-16' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-2">
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