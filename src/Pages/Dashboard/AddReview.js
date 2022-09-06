import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBCardTitle, MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React from 'react';

const AddReview = () => {
    return (
        <div>

            <div className='d-flex justify-content-center mt-5'>
                <MDBCard className='w-50'>
                    <MDBCardBody >
                        <h2 className='text-center'>Review</h2>
                        <MDBInput label='Rating' id='form1' type='text' />
                        <MDBTextArea className='my-3' label='Message' id='textAreaExample' rows={4} />
                        <div className='d-flex justify-content-center'>
                            <MDBBtn className='mx-2' color='info'>
                                submit
                            </MDBBtn>
                        </div>

                    </MDBCardBody>
                </MDBCard>

            </div>
        </div >
    );
};

export default AddReview;