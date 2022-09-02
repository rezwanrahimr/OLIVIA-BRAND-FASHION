import React from 'react';
import imgONe from '../../images/Competitive intelligence-bro.svg';
import imgTWo from '../../images/Segmentation-bro.svg';
import about from './about.css';

const About = () => {
    return (
        <div className='text-black about'>
            <h1 className='text-center text-black mt-5 fw-bold'>ABOUT US</h1>
            <div className='row'>
                <div className='col-lg-6 col-sm-12  p-5'>
                <img src={imgONe} alt="" width='100%' />
                <h3>Who We Are</h3>
                <p >If there is one thing kids love more than eating pizza, it’s being able to make it themselves using all their favorite toppings. Creating a “make it yourself” pizza party is a great way to customize the meal while involving friends and family in a fun activity. Best of all, this crust recipe, which uses a surprise ingredient, is simple enough to make at home without making a mess of the kitchen.</p>
                </div>
                <div className='col-lg-6 col-sm-12 p-5'>
                <img src={imgTWo} alt="" width='100%' />
                <h3>Our Vision</h3>
                <p>When it comes to convenience and enjoyment when cooking there are very few appliances in my kitchen that can compete with my George Foreman grill. While there are many different sizes and styles to the George Foreman line of grilling machines I have the George Foreman Next Grilleration Grill, which allows us to do almost anything on our grill. This grill even comes with the ability to make waffles in addition to all the wonderful.</p>
                </div>
            </div>
        </div>
    );
};

export default About;