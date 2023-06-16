import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
} from "mdb-react-ui-kit";
import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { id } = useParams();

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.name.value;
    const Number = form.number.value;
    const Address = form.address.value;
    const Image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", Image);

    // Host Image on Image BB
    fetch(
      `https://api.imgbb.com/1/upload?key=81a6cc27ee20d033b013542f5d21566b`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const profileData = { Name, Number, Address, Image: data.data.url };

          fetch(
            `https://olivia-brand-fashion-backend.vercel.app/userDataUpdate/${id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(profileData),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                Swal.fire(
                  "Update Success",
                  "You clicked the button!",
                  "success"
                );
              }
            });
        }
      });
  };

  return (
    <div
      className="d-flex justify-content-center row"
      style={{ marginTop: "80px", marginLeft: "0px", marginRight: "0px" }}
    >
      <MDBCard alignment="center" className="w-auto mt-5 col-sm-12">
        <MDBCardBody>
          <MDBCardTitle>Update Profile</MDBCardTitle>
          <form onSubmit={handleUpdateProfile}>
            <MDBInput label="Name" name="name" id="form1" type="text" />
            <MDBInput
              label="Number"
              name="number"
              className="my-3"
              id="form1"
              type="number"
            />
            <MDBInput label="Address" name="address" id="form1" type="text" />{" "}
            <br />
            <input
              className="form-control"
              name="image"
              type="file"
              id="formFile"
            />
            <MDBBtn color="dark" className="my-3" type="submit">
              submit
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default UpdateProfile;
