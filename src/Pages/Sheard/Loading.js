import React from 'react';
import { MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';
import loading from './loading.css';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center  align-items-center loading'>
            <MDBBtn disabled>
                <MDBSpinner grow size='sm' role='status' tag='span' className='me-2' />
                Loading...
            </MDBBtn>

        </div>
    );
};

export default Loading;