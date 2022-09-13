import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import col1 from '../../images/col1.png';
import col2 from '../../images/col2.png';
import OurService from '../OurService/OurService';
import Collection3 from './Collection3';
import collectionn from './collectionn.css';
import CollectionTwo from './CollectionTwo';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Sheard/Footer';

const Collection = () => {
    return (
        <div className=' collectioin'>
            <h1 className='fw-bold text-center my-5 display-5 text-black '>Collections</h1>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 section1'>
                    <Card className="bg-dark text-white border-0 containeer">
                        <Card.Img  src={col1} alt="Card image" />
                        <Card.ImgOverlay className=' d-flex justify-content-end align-items-center me-3'>
                            <div>
                                <h5 className='text-danger font-monospace fw-bold'>WOMEN'S</h5>
                                <h2 className='text-black font-monospace fw-bold'>Snowboard </h2>
                                <h2 className='text-black font-monospace fw-bold'>Clothing</h2>
                                <Card.Text>
                                    <Link to='' className='text-black fw-bold'>Shop Clother</Link>
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className='col-lg-6 col-sm-12 section2'>
                    <Card className="bg-dark text-white border-0 containeer">
                        <Card.Img  src={col2} alt="Card image" />
                        <Card.ImgOverlay className=' d-flex justify-content-start align-items-center ms-3'>
                            <div>
                                <h5 className='text-danger font-monospace fw-bold'>MEN'S</h5>
                                <h2 className='text-black font-monospace fw-bold'>Rounded </h2>
                                <h2 className='text-black font-monospace fw-bold'>Neck Cotton</h2>
                                <Card.Text>
                                    <Link to='' className='text-black fw-bold'>Shop Clother</Link>
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </div>
            <CollectionTwo></CollectionTwo>
            <Collection3></Collection3>
            <OurService></OurService>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Collection;