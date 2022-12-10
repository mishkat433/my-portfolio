import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import SectionHead from '../../Common/SectionHead/SectionHead';

const Contact = () => {

    return (
        <section className='pt-20' id='contact'>
            <SectionHead title={"Contact Me"}></SectionHead>
            <div className="hero my-10 md:my-20 ">
                <div className="hero-content w-full rounded-md">
                    <form className="card w-full " target="_blank" action="https://formsubmit.co/6b63d3dbd439ce894ba912f8253f9aae" method="POST">
                        <div className=" w-full">
                            <div className='flex flex-col md:flex-row gap-10 '>
                                <div className="form-control w-full">
                                    <input type="text" name='name' placeholder="Enter your full name : " className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <input type="email" name='email' placeholder="Enter your email : " className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-5">
                                <textarea name="message" className="textarea textarea-bordered h-32" placeholder='Type your message here :'></textarea>
                            </div>
                            <div className='flex justify-between'>
                                <div className="form-control mt-5 w-2/6 md:w-1/6">
                                    <button type='reset' className="btn bg-orange-500 hover:bg-orange-700">reset</button>
                                </div>
                                <div className="form-control mt-5 w-2/6 md:w-1/6">
                                    <button type='submit' className="btn bg-orange-500 hover:bg-orange-700">Send <FaTelegramPlane className='ml-3' /></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Contact;
