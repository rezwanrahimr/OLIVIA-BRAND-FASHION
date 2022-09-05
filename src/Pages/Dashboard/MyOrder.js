import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';

const MyOrder = () => {
    return (
        <div>
            <h1 className='text-center'>MY ORDER</h1>
            <div>
            <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>PRODUCTS</th>
          <th scope='col'>TRANSACTION ID</th>
          <th scope='col'>QUANTITY</th>
          <th scope='col'>PRICE	</th>
          <th scope='col'>PAY MENT</th>
          <th scope='col'>CANCLE</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        
      </MDBTableBody>
    </MDBTable>
            </div>
        </div>
    );
};

export default MyOrder;