import React from 'react';
import person from  '../../../assets/images/about_us/person.jpg'
import part from  '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col left-0 lg:flex-row">
                
                <div className='w-1/2 relative'>
                <img src={person} alt='' className="max-w-sm rounded-lg w-4/6 h-72 shadow-2xl" />
                <img src={part} alt="" className="max-w-sm rounded-lg w-3/6 h-56  left-28 absolute top-1/2 shadow-2xl" />
                </div>
                <div className='w-1/2'>
                <h1 className= 'font-bold  text-xl text-orange-600'>About Us</h1>
                    <p className="text-5xl font-bold">
                        <small>We are qualified</small> <br />
                        <small>& of experience </small> <br />
                        <small>in this field </small>
                    </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=" pb-8">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;