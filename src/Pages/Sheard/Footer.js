import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import CompanyLogo from '../../images/companyLogo.png';

const Footer = () => {
    return (
        <MDBFooter bgColor='white' className='text-center  text-lg-start text-muted mt-5'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block text-body'>
                    <span>Follow our social Media:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5 text-body'>
                    <MDBRow className=''>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold '>
                                <MDBIcon icon="" className="me-3" />
                                <img height='256px' width='174px' src="https://cdn.shopify.com/s/files/1/0564/4081/5810/t/1/assets/ssl_payment_logo2.png?v=138243473034531570251624694646" alt="" />
                            </h6>
                            <p className='fw-normal text-body'>
                            
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                T-Shirt
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                Clothing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                Glasses
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                Shose
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Kathalbagan,Dhaka,Bangladesh
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@olivia.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center text-body p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright : 
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                 rezwan-rahim.web.app
                </a>
            </div>
        </MDBFooter>
    );
};

export default Footer;