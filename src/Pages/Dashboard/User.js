import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { toast } from 'react-toastify';

const User = ({user}) => {
    const {email,role} = user;


    const MakeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accesToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Make Admin Successfuly')
            
            
        })
    }
    return (
        <>
           
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
                <p className='fw-bold mb-1'></p>
                <p className='text-muted mb-0'>{email}</p>
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
          <td> {role !== 'admin' && <MDBBtn onClick={MakeAdmin} color="elegant">Admin</MDBBtn>}</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
            </>
        
    );
};

export default User;