import React from 'react';
import SectionHead from '../../Common/SectionHead/SectionHead';
import ProjectCart from './ProjectCart';

const projectData = [
    {
        id: 1,
        url: "https://modern-laptop.web.app",
        siteName: 'Modern Laptop',
        desc: "Second hand Laptop sales related website",
        technology: 'React, React-slick-slider, React-router-dom, React-icon, Firebase authentication, Regex, JWT, NodeJS, ExpressJS, MongoDB, TailwindCSS',
        clintSite: "https://github.com/mishkat433/modern-laptop-clint",
        serverSite: 'https://github.com/mishkat433/modern-laptop-server'
    },
    {
        id: 1,
        url: "https://perfect-click2.web.app",
        siteName: 'Perfect Click',
        desc: "Personal photography service related Website",
        technology: 'React, React-slick-slider, React-router-dom, React-icon, Firebase authentication, Regex, JWT, NodeJS, ExpressJS, MongoDB, TailwindCSS',
        clintSite: "https://github.com/mishkat433/perfect-click-clint",
        serverSite: 'https://github.com/mishkat433/perfect-click-server'
    },
    {
        id: 1,
        url: "https://auto-car-5826.web.app",
        siteName: 'Perfect Click',
        desc: "Car service appointment related website",
        technology: 'React, React-slick-slider, React-router-dom, React-icon, Firebase authentication, Regex, JWT, NodeJS, ExpressJS, MongoDB, TailwindCSS',
        clintSite: "https://github.com/mishkat433/auto-car-clint",
        serverSite: 'https://github.com/mishkat433/auto-car-server'
    }
]

const Projects = () => {
    return (
        <section className='full-portfolio text-white pt-20' id='project'>
            <SectionHead title={"Project"}></SectionHead>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10'>
                {
                    projectData.map(project => <ProjectCart project={project} key={project.id} />)
                }
            </div>
        </section>
    );
};

export default Projects;
