import React from 'react';
import { Card } from 'react-bootstrap';

const Collection3 = () => {
    return (
        <div>
        <div className='row'>
            <div className='col-lg-4 col-sm-10 mt-3'>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://cdn.shopify.com/s/files/1/0271/0057/7840/collections/c5_600x600_crop_center@3x.jpg?v=1573099669" alt="Card image" />
                    <Card.ImgOverlay >
                    <div>
                            <h5 className='text-danger font-monospace text-center fw-bold'>26 PRODUCTS</h5>
                            <h2 className='text-black text-center  font-monospace fw-bold'>Clothing</h2>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='col-lg-4 col-sm-10 mt-3'>
            <Card className="bg-dark text-white">
                    <Card.Img src="https://cdn.shopify.com/s/files/1/0271/0057/7840/collections/c11_600x600_crop_center@3x.jpg?v=1573099649" alt="Card image" />
                    <Card.ImgOverlay >
                    <div>
                            <h5 className='text-danger font-monospace text-center fw-bold'>10 PRODUCTS</h5>
                            <h2 className='text-black text-center  font-monospace fw-bold'>T-Shirt</h2>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='col-lg-4 col-sm-10 mt-3'>
            <Card className="bg-dark text-white">
                    <Card.Img src="https://cdn.shopify.com/s/files/1/0271/0057/7840/collections/c2_600x600_crop_center@3x.jpg?v=1573099724" alt="Card image" />
                    <Card.ImgOverlay >
                    <div>
                            <h5 className='text-danger font-monospace text-center fw-bold'>13 PRODUCTS</h5>
                            <h2 className='text-black text-center  font-monospace fw-bold'>Hat</h2>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>

        </div>
    </div>
    );
};

export default Collection3;