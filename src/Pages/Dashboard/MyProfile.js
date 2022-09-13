import { MDBBadge, MDBBtn, MDBTableBody } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';
import myprofile from './myprofile.css';

const MyProfile = () => {
  const [userData, setUserData] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    fetch(`https://pacific-journey-95029.herokuapp.com/user/${email}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data)

      })
  }, [user])

  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    toast.error(error?.message)
  }
 

  return (
    <div>
      <h1 className='text-center my-3'>MY PROFILE</h1>
      <div className='profileContent d-flex justify-content-center mt-5 col-sm-12'>
        <MDBTableBody>
          <tr>
            <td>
              {
                userData.map(user => <div key={user._id} className='d-flex align-items-center '>
                  <img
                    src={user.Image}
                    alt=''
                    style={{ width: '95px', height: '95px' }}
                    className='rounded-circle'
                  />

                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Name: {user.Name}</p>
                    <p className='text-muted mb-0'>Email: {user.email}</p>
                    <p className='text-muted mb-0'>Phone: {user.Number}</p>
                    <p className='text-muted mb-0'>Address: {user.Address}</p>
                    <div>
                      <Link to={`/updateProfile/${user._id}`}><MDBBtn color="dark">Update</MDBBtn></Link>
                    </div>
                  </div>
                </div>)
              }
            </td>
          </tr>

        </MDBTableBody>
      </div>
    </div>
  );
};

export default MyProfile;