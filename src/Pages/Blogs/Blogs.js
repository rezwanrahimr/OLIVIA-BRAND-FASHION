import React from 'react';
import { Link } from 'react-router-dom';
import blogs from './blogs.css';

const Blogs = () => {
    return (
        <div className='mt-5 p-3'>
            <h1 className='text-center fw-bold'>LATEST BLOGS</h1>
            <h6 className='text-center fw-light font-monospace'>The latest news and blogs</h6>
            <div className='row mt-5'>
                <div className='col-lg-4 p-2'>
                    <div class="card text-bg-dark border-0">
                        <img src="https://cdn.shopify.com/s/files/1/0263/9501/7288/articles/blog14_450x@3x.jpg?v=1573787741" class="card-img" alt="..." />
                        <div class="card-img-overlay d-flex align-items-end">

                            <Link class="card-text text-decoration-none " to=''>
                                <p class="card-text text-white">NOV 19,2022</p>
                                <p className='fw-bold text-white  fs-5'>A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More</p></Link>


                        </div>
                    </div>
                </div>
                <div className='col-lg-4 p-2'>
                    <div class="card text-bg-dark border-0">
                        <img src="https://cdn.shopify.com/s/files/1/0263/9501/7288/articles/blog10_450x@3x.jpg?v=1573787753" class="card-img" alt="..." />
                        <div class="card-img-overlay d-flex align-items-end">

                            <Link class="card-text text-decoration-none " to=''>
                                <p class="card-text text-white">NOV 19,2022</p>
                                <p className='fw-bold text-white  fs-5'>A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More</p></Link>


                        </div>
                    </div>
                </div>
                <div className='col-lg-4 p-2'>
                    <div class="card text-bg-dark border-0">
                        <img src="https://cdn.shopify.com/s/files/1/0263/9501/7288/articles/blog15_450x@3x.jpg?v=1573787766" class="card-img" alt="..." />
                        <div class="card-img-overlay d-flex align-items-end">

                            <Link class="card-text text-decoration-none " to=''>
                                <p class="card-text text-white">NOV 19,2022</p>
                                <p className='fw-bold text-white  fs-5'>A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More</p></Link>


                        </div>
                    </div>
                </div>
               

            </div>

        </div>
    );
};

export default Blogs;
