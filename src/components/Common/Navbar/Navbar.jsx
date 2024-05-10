import React from 'react';
import logo from "../../../images/mishkat-logo-6.png";
import cv from "../../../CV/MiskatCV.pdf";
import { Link, NavLink } from 'react-router-dom';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import GetResume from '../GetResume';

const Navbar = () => {

    const menuItems = <>
        <li><NavLink to='/home' className={({ isActive }) => isActive ? 'text-red border-red border-b-2 bg-transparent' : 'text-black hover:border-red hover:border-b-2 hover:bg-transparent'}>Home</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-red border-red border-b-2 bg-transparent' : 'text-black hover:border-red hover:border-b-2 duration-300 hover:bg-transparent'} >About</NavLink></li>
        <li><NavLink to='/project' className={({ isActive }) => isActive ? 'text-red border-red border-b-2 bg-transparent' : 'text-black hover:border-red hover:border-b-2 hover:bg-transparent'} >Project</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red border-red border-b-2 bg-transparent' : 'text-black hover:border-red hover:border-b-2 hover:bg-transparent'}>Contact</NavLink></li>
        <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-red border-red border-b-2 bg-transparent' : 'text-black hover:border-red hover:border-b-2 hover:bg-transparent'}>Blog</NavLink></li>
    </>
    return (
        // bg-gradient-to-b from-[#1b2a42] to-[#0a192ff8]
        <div className=' bg-[#e5e7fef4] shadow-md sticky top-0 z-20'>
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
                        <img className='w-14 md:w-16 ' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-2">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <GetResume />
                </div>
            </div>
        </div>
    );
};

export default Navbar;