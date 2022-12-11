import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import SectionHead from '../../Common/SectionHead/SectionHead';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zo8qc9a', 'template_t8j9xte', e.target, '21G9ckUfAIli17uPg')
            .then((result) => {
                if (result?.status === 200) {
                    toast.success('Successfully send your email')
                }
            }, (error) => {
                toast.error('Something went wrong, Please try again')
            });
        e.target.reset()
    };

    return (
        <section className='pt-20 w-11/12 mx-auto' id='contact'>
            <SectionHead title={"Contact Me"}></SectionHead>
            <div className='flex flex-col md:flex-row gap-20 my-10 md:my-20'>
                <div className="hero   ">
                    <div className="hero-content w-full rounded-md">
                        <form onSubmit={sendEmail} className="card w-full " >
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
                                <div className="form-control mt-5 w-3/6 md:w-1/6">
                                    <button type='submit' className="btn bg-orange-500 hover:bg-orange-700">Send <FaTelegramPlane className='ml-3' /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="text-white">
                    <div className="col-lg-6">
                        <p className='mb-5 text-justify'>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just say 'hi' to me.</p>
                    </div>
                    <div className="">
                        <div className="contact-way">
                            <h3><FaMailBulk className='text-2xl text-orange-500 text-center' /></h3>
                            <p>mishkat433@gmail.com <span className='text-muted'>(Recommended)</span></p>
                        </div>
                        <div className="contact-way">
                            <h3>Social</h3>
                            <p>facebook.com/Md.Mishkat.501 <span className='text-muted'>(Slow response)</span></p>
                        </div>
                        <div className="contact-way">
                            <h3>Phone</h3>
                            <p>01640700565 <span className='text-muted'>(Always Available)</span> </p>
                        </div>
                        <div className="contact-way">
                            <h3>Address</h3>
                            <p>South Mehernama Bazar Para, Pekua, Cox's Bazar, Bangladesh - 4770 </p>
                        </div>
                    </div>
                </div> */}
            </div>

        </section>
    );
};

export default Contact;

// target="_blank" action="https://formsubmit.co/6b63d3dbd439ce894ba912f8253f9aae" method="POST"