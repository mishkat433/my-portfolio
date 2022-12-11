import React, { useEffect, useState } from 'react';
import SectionHead from '../../Common/SectionHead/SectionHead';
import ProjectCart from './ProjectCart';


const Projects = () => {
    const [projectData, setProjectData] = useState([])

    useEffect(() => {
        fetch('./projectData.json')
            .then(res => res.json())
            .then(data => {
                setProjectData(data)
            })
    }, [])

    if (projectData.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <section className='full-portfolio text-white pt-20 w-11/12 mx-auto mb-20' id='project'>
            <SectionHead title={"Projects"}></SectionHead>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10'>
                {
                    projectData.map(project => <ProjectCart project={project} key={project.id} />)
                }
            </div>
        </section>
    );
};

export default Projects;
