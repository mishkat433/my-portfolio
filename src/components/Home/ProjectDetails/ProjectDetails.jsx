import React, { useEffect, useState } from 'react';
import { FaGithubAlt, FaGithubSquare, FaRegPaperPlane } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [singleProject, setSingleProject] = useState([])
    const params = useParams()
    const id = Number(params.id)

    useEffect(() => {
        fetch('/projectData.json')
            .then(res => res.json())
            .then(data => {
                const project = data.filter(pro => pro.id === id)
                setSingleProject(project[0])
            })
    }, [id])

    return (
        <div className='w-11/12 mx-auto text-white my-20'>
            <div className="card card-side gap-10 bg-[#102649e9] shadow-xl">

                <figure><img className='w-full h-full' src={singleProject?.banner} alt="project" /></figure>
                {/* <figure><img className='w-[400px] h-full' src={singleProject?.banner} alt="project" /></figure>
                <figure><img className='w-[400px] h-full' src={singleProject?.banner} alt="project" /></figure> */}

                <div className="card-body w-1/2">
                    <h2 className="text-3xl mt-10 mb-3">{singleProject.siteName}</h2>
                    <p>{singleProject.desc} </p>
                    <p className='mt-3'>{singleProject.details}</p>
                    <p className='mt-3'>Technology used : {singleProject.technology}</p>
                    <div className="card-actions justify-evenly gap-10 mt-5">
                        <a href={singleProject.clintSite} target="blank" className="text-white hover:text-orange-500 duration-300 text-3xl" title='Clint Site Code'><FaGithubAlt /></a>
                        <a href={singleProject.serverSite} target="blank" className="text-white hover:text-orange-500 duration-300 text-3xl" title='Server Site Code'><FaGithubSquare /></a>
                        <a href={singleProject.url} target="blank" className="text-white hover:text-orange-500 duration-300 text-3xl" title='Live Site'><FaRegPaperPlane /></a>
                    </div>
                </div>
            </div>
            {/* <div className={view ? "flex shadow-xl rounded-xl " : "card card-compact bg-none shadow-xl"}>
                <figure><img className= "w-[600px] h-[400px] mr-10 rounded-l-xl" : 'w-full h-[300px]'} src={image} alt="Shoes" /></figure>
                <div className={view ? "w-1/2 card-body" : "card-body"}>
                    <h2 className="card-title">{title}</h2>
                    <p>{para.slice(0, 100)}...</p>
                    
                    <hr className='border-1 my-1 text-gray-400' />
                    <div className=''>
                        <h3 className=' text-xl '>Price: <span className='text-2xl font-semibold'> ${price}</span>/night</h3>
                    </div>
                    <div className="card-actions justify-end mt-3">
                        <Link to={`/details/${_id}`} className="btn btn-warning text-white hover:bg-white hover:text-black ">Book Now</Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProjectDetails;