import React from 'react';
import SectionHead from '../../Common/SectionHead/SectionHead';
import "./Contact.css"

const Contact = () => {
    return (
        <section className='full-contact container' id='contact'>
            <SectionHead title={"Contact"}></SectionHead>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <p className='contact-para text-justify'>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                    <div className="button-all">
                        <a className='btn getResume mr-lg-4 mt-sm-3' href="mailto:mishkat433@gmail.com">Mail Me<i className="fa-solid fa-paper-plane ml-2"></i></a>
                    </div></div>
                <div className="col-lg-6">
                    <div className="contact-way">
                        <h3>Email</h3>
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
            </div>
        </section>
    );
};

export default Contact;
