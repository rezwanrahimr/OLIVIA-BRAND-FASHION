import React from 'react';
import subscribe from './subscribe.css';

const Subscribe = () => {
    return (
        <div className='subscribeSection'>
            <div className='text-center'>
            <h3 className='fw-bold'>Subscribe to Our Newsletter</h3>
            <span className='font-monospace'>Subscribe to our newsletter and get 20% off your first purchase</span>
            </div>
            <div className='subscribeInput my-5 d-flex justify-content-center'>
                <input type="email" name="" placeholder='Email' id="" />
                <button type="submit">SUBSCRIBE</button>
            </div>
            
        </div>
    );
};

export default Subscribe;