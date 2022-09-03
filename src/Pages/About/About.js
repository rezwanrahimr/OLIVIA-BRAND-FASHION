import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import imgONe from '../../images/Competitive intelligence-bro.svg';
import imgTWo from '../../images/Segmentation-bro.svg';
import OurService from '../OurService/OurService';
import Footer from '../Sheard/Footer';
import about from './about.css';


const About = () => {
    return (
        <div className='text-black about mt-5'>
            <h1 className='text-center text-black mt-5 fw-bold'>ABOUT US</h1>
            <span className='d-flex justify-content-center align-items-center'><a className='text-black' href="/Home">Home</a><MDBIcon className='mx-2' fas icon="angle-right" /><a href="">About us</a></span>
            <div className='row'>
                <div className='col-lg-6 col-sm-12  p-5'>
                <img src='https://ak1.picdn.net/shutterstock/videos/2219176/thumb/1.jpg' alt="" width='100%' />
                <h3 className='mt-4'>Who We Are</h3>
                <p >If there is one thing kids love more than eating pizza, it’s being able to make it themselves using all their favorite toppings. Creating a “make it yourself” pizza party is a great way to customize the meal while involving friends and family in a fun activity. Best of all, this crust recipe, which uses a surprise ingredient, is simple enough to make at home without making a mess of the kitchen.</p>
                </div>
                <div className='col-lg-6 col-sm-12 p-5'>
                <img src='https://media.istockphoto.com/photos/analyst-works-on-a-personal-computer-showing-statistics-graphs-and-picture-id912637018?k=20&m=912637018&s=170667a&w=0&h=WmXikMzOTnV6iw8jiw_GrOEVPLsZtmkkz8cRSLWZ2KA=' alt="" width='100%' />
                <h3 className='mt-4 '>Our Vision</h3>
                <p>When it comes to convenience and enjoyment when cooking there are very few appliances in my kitchen that can compete with my George Foreman grill. While there are many different sizes and styles to the George Foreman line of grilling machines I have the George Foreman Next Grilleration Grill, which allows us to do almost anything on our grill. This grill even comes with the ability to make waffles in addition to all the wonderful.</p>
                </div>
            </div>
            <div>
                <div className='my-5'>
                <h1 className='text-center fw-bold '>OUR TEAM</h1>
                <h5 className='font-monospace text-center'>Our Experience</h5>
                </div>
                <div className='row mx-2'>
                    <div className='col-lg-3 '>
                        <img src='https://cdn.shopify.com/s/files/1/0263/9501/7288/files/t1.jpg?v=1574307321' alt=""  width="100%"/>
                        <h4 className='text-center mt-4'>Mason Wong</h4>
                        <p className='text-center font-monospace'>C.E.O</p>
                    </div>
                    <div className='col-lg-3 col-sm-12 '>
                    <img src='https://cdn.shopify.com/s/files/1/0263/9501/7288/files/t2.jpg?v=1574307334' alt=""  width="100%"/>
                        <h4 className='text-center mt-4'>Mason Wong</h4>
                        <p className='text-center font-monospace'>Fashion Design</p>
                    </div>
                    <div className='col-lg-3 col-sm-12 '>
                    <img src='https://cdn.shopify.com/s/files/1/0263/9501/7288/files/t3.jpg?v=1574307343' alt=""  width="100%"/>
                        <h4 className='text-center mt-4'>Mason Wong</h4>
                        <p className='text-center font-monospace'>Manager</p>
                    </div>
                    <div className='col-lg-3 col-sm-12'>
                    <img src='https://cdn.shopify.com/s/files/1/0263/9501/7288/files/t4.jpg?v=1574307352' alt=""  width="100%"/>
                        <h4 className='text-center mt-4'>Mason Wong</h4>
                        <p className='text-center font-monospace'>Delivery</p>
                    </div>

                </div>
            </div>
            <div>
                <div className='text-center my-5'>
                    <h1 className='fw-bold'>WHY CHOOSE US</h1>
                    <h5 className='font-monospace'>Our Benefit</h5>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='col-lg-6 p-5'>
                       <div className='d-flex align-items-start my-3'>
                           <div className=''>
                          
                           </div>
                       <div>
                            <h4 className='fw-bold'>Support 24/7</h4>
                            <span className=''>Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity</span>
                        </div>
                       </div>
                        <div className='my-3'>
                            <h4 className='fw-bold'>Easy To Return</h4>
                            <span className=''>Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity</span>
                        </div>
                        <div className='my-3'>
                            <h4 className='fw-bold'>Hight Quality</h4>
                            <span className=''>Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity </span>
                        </div>
                    </div>
                    <div className='col-lg-6 p-5'>
                    <div className='ratio ratio-16x9'>
                <iframe
                  className='shadow-1-strong rounded'
                  src='https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com'
                  title='YouTube video'
                  allowFullScreen
                  data-gtm-yt-inspected-2340190_699='true'
                  id='388567449'
                ></iframe>
              </div>
                    </div>
                </div>
            </div>
            <OurService></OurService>
            <Footer></Footer>
        </div>
    );
};

export default About;