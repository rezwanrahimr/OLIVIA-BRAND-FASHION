import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const User = ({ user, setUser }) => {
  const { Name, email, role, Image, Address, _id } = user;
  console.log(user);


  const MakeAdmin = () => {
    fetch(`https://pacific-journey-95029.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        'content-type':'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Make Admin Successfuly')


      })
  }

  // Delete User 
  const HandleDelete = (id) => {

    fetch(`https://pacific-journey-95029.herokuapp.com/user/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Delete User Successfuly !")
        setUser(user.filter((order) => order._id !== id));
      })
  }
  return (
    <>

      <tr>
        <td>
          <div className='d-flex align-items-center'>
            <img
              src={Image}
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>{Name}</p>
              <p className='text-muted mb-0'>{email}</p>
            </div>
          </div>
        </td>
        <td>
          {
           role == 'admin' && <p className='fw-bold '><MDBBadge color='primary' pill>
              Admin
            </MDBBadge></p>

          }
          {
            role !== 'admin' && <MDBBadge color='warning' pill>
              User
            </MDBBadge>
          }


        </td>
        <td>
          <MDBBadge color='success' pill>
            Active
          </MDBBadge>
        </td>
        <td> {role !== 'admin' && <Button variant="dark" onClick={MakeAdmin}>Make Admin</Button>}</td>
        <td>
          <Button variant="danger" onClick={() => HandleDelete(_id)}>Remove</Button>
        </td>
      </tr>
    </>

  );
};

export default User;