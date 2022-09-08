import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [Name, setName] = useState('');
    const [Number, setNumber] = useState('');
    const [Address, setAddress] = useState('');
    const [Image, setImage] = useState('');
    const ProfileData = { Name, Number, Address, Image }
    console.log(Image)
    const [user, loading, error] = useAuthState(auth);
    const email = user?.email;
    console.log(user)
    if(loading){
        return <Loading></Loading>
    }
    if(error){
        toast.error(error.message)
        navigate('/MyProfile')
    }

   const handleUpdateProfile = () =>{
       const url = `http://localhost:5000/userDataUpdate/${email}`
    fetch(url,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(ProfileData)
    })
    .then(res => res.json())
    .then(data => {
        toast.success('Profile Update Successful')

    })
   }
  



    return (
        <div className='d-flex justify-content-center mt-5'>
            <MDBCard alignment='center' className='w-25'>
                <MDBCardBody>
                    <MDBCardTitle>Update Profile</MDBCardTitle>
                    <form>
                        <MDBInput label='Name' name='Name' onChange={(e) => setName(e.target.value)} id='form1' type='text' />
                        <MDBInput label='Number' name='Number' onChange={(e) => setNumber(e.target.value)} className='my-3' id='form1' type='number' />
                        <MDBInput label='Address' name='Address' onChange={(e) => setAddress(e.target.value)} id='form1' type='text' />
                        <MDBInput label='Image' className='my-3' name='Image' onClick={(e)=> setImage(e.target.value)} id='form1' type='text' />
                        <MDBBtn color="dark" className='my-3' onClick={()=> handleUpdateProfile()}>submit</MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default UpdateProfile;