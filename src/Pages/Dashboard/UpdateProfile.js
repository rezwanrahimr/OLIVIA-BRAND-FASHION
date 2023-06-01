import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBInput,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Image, setImage] = useState("");
  const ProfileData = { Name, Number, Address, Image };
  const { id } = useParams();

  const handleUpdateProfile = (id) => {
    fetch(
      `https://olivia-brand-fashion-backend.vercel.app/userDataUpdate/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ProfileData),
      }
    )
      .then((res) => res.json())
      .then(
        (data) => {
          // if (data) {
          //     toast.success('Profile Update')
          // }
        },
        [id]
      );
  };

  return (
    <div className="d-flex justify-content-center row">
      <MDBCard alignment="center" className="w-auto mt-5 col-sm-12">
        <MDBCardBody>
          <MDBCardTitle>Update Profile</MDBCardTitle>
          <form>
            <MDBInput
              label="Name"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              id="form1"
              type="text"
            />
            <MDBInput
              label="Number"
              name="Number"
              onChange={(e) => setNumber(e.target.value)}
              className="my-3"
              id="form1"
              type="number"
            />
            <MDBInput
              label="Address"
              name="Address"
              onChange={(e) => setAddress(e.target.value)}
              id="form1"
              type="text"
            />
            <MDBInput
              label="Image"
              className="my-3"
              name="Image"
              onClick={(e) => setImage(e.target.value)}
              id="form1"
              type="text"
            />
            <MDBBtn
              color="dark"
              className="my-3"
              onClick={() => handleUpdateProfile(id)}
            >
              submit
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default UpdateProfile;
