import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCart = ({ project }) => {
    console.log(project.banner);
    return (
        <div className="card rounded-md shadow-xl bg-main-bg bg-center" data-aos="flip-left">
            <figure><img src={project?.banner} alt="" /></figure>
            <div className="card-body p-3 text-center text-black">
                <h2 className="text-3xl">{project.siteName}</h2>
                <p className='font-thin'>{project.desc} </p>
                <div className="card-actions justify-evenly gap-10 my-5 ">
                    {/* <a href={project.clintSite} target="blank" className="text-white hover:text-orange-500 duration-300 text-3xl" title='Clint Site Code'><FaGithubAlt /></a>
                    <a href={project.serverSite} target="blank" className="text-white hover:text-orange-500 duration-300 text-3xl" title='Server Site Code'><FaGithubSquare /></a> */}
                    <Link to={`/details/${project.id}`} className='btn bg-red border-none'>Details</Link>
                    <a href={project.url} target="blank" className="text-white bg-red border  border-red p-2 rounded-lg duration-300 text-3xl" title='Live Site'><FaRegPaperPlane /></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCart;