import React from 'react';
import { FaGithubAlt, FaGithubSquare, FaRegPaperPlane } from 'react-icons/fa';

const ProjectCart = ({ project }) => {
    console.log(project);
    return (
        <div className="card shadow-xl bg-[#102649e9]" data-aos="flip-left">
            <figure><iframe className='w-full h-[280px]' src={project.url} title='website'></iframe> </figure>
            <div className="card-body p-3">
                <h2 className="text-3xl">{project.siteName}</h2>
                <p>{project.desc} </p>
                <div className="card-actions justify-center gap-10 my-5 ">
                    <a href={project.clintSite} target="blank" className="text-white hover:text-orange-500 duration-300 text-3xl" title='Clint Site Code'><FaGithubAlt /></a>
                    <a href={project.serverSite} target="blank" className="text-white hover:text-orange-500 duration-300 text-3xl" title='Server Site Code'><FaGithubSquare /></a>
                    <a href={project.url} target="blank" className="text-white hover:text-orange-500 duration-300 text-3xl" title='Live Site'><FaRegPaperPlane /></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCart;