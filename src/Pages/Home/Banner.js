import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import BannerOne from '../../images/banner1.png';
import banner from './banner.css';

const Banner = () => {
   
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerOne}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <div className='HeaderText'>
                        <h5 className='text-secondary text-start fw-bold lh-1'>SPRING / SUMMER 2022</h5>
                        <h1 className='text-danger text-start fw-bold display-1 lh-1'>Sale 50%</h1>
                        <h1 className='text-dark text-start fw-bold display-2 lh-1'>Black Friday</h1>
                        <Button className='d-flex justify-content-startd text-black fw-bold mt-5' variant="outline-danger">SHOP NOW</Button>{' '}
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerOne}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <div className='HeaderText'>
                        <h5 className='text-secondary text-start fw-bold lh-1'>SPRING / SUMMER 2022</h5>
                        <h1 className='text-danger text-start fw-bold display-1 lh-1'>Sale 50%</h1>
                        <h1 className='text-dark text-start fw-bold display-2 lh-1'>Black Friday</h1>
                        <Button className='d-flex justify-content-startd text-black fw-bold mt-5' variant="outline-danger">SHOP NOW</Button>{' '}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerOne}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className='HeaderText'>
                        <h5 className='text-secondary text-start fw-bold lh-1'>SPRING / SUMMER 2022</h5>
                        <h1 className='text-danger text-start fw-bold display-1 lh-1'>Sale 50%</h1>
                        <h1 className='text-dark text-start fw-bold display-2 lh-1'>Black Friday</h1>
                        <Button className='d-flex justify-content-startd text-black fw-bold mt-5' variant="outline-danger">SHOP NOW</Button>{' '}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;