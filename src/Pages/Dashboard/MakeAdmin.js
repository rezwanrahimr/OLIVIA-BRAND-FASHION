import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import User from './User';

const MakeAdmin = () => {
    const [users,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://pacific-journey-95029.herokuapp.com/user',{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accesToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setUser(data));
    },[])
    return (
        <div>
            <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
            users.map(user => <User key={user._id} user={user}  ></User>)
        }
      </MDBTableBody>
    </MDBTable>
        </div>
    );
};

export default MakeAdmin;