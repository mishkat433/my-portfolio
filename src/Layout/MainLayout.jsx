import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';
import Navbar from '../components/Common/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='bg-[#0A192F]'>

            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;