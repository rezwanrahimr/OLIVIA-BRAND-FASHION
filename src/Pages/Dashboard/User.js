import { MDBBadge } from "mdb-react-ui-kit";
import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const User = ({ user, refetch }) => {
  const { Name, email, role, Image, _id } = user;

  const MakeAdmin = () => {
    fetch(
      `https://olivia-brand-fashion-backend.vercel.app/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire(
            "Make Admin Successfully",
            "You clicked the button!",
            "success"
          );
          refetch();
        }
      });
  };

  // Delete User
  const HandleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://olivia-brand-fashion-backend.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire("Delete User ", "success");
              refetch();
            }
          });
      }
    });
  };
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={Image}
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{Name}</p>
              <p className="text-muted mb-0">{email}</p>
            </div>
          </div>
        </td>
        <td>
          {role == "admin" && (
            <p className="fw-bold ">
              <MDBBadge color="primary" pill>
                Admin
              </MDBBadge>
            </p>
          )}
          {role !== "admin" && (
            <MDBBadge color="warning" pill>
              User
            </MDBBadge>
          )}
        </td>
        <td>
          <MDBBadge color="success" pill>
            Active
          </MDBBadge>
        </td>
        <td>
          {" "}
          {role !== "admin" && (
            <Button variant="dark" onClick={MakeAdmin}>
              Make Admin
            </Button>
          )}
        </td>
        <td>
          <Button variant="danger" onClick={() => HandleDelete(_id)}>
            Remove
          </Button>
        </td>
      </tr>
    </>
  );
};

export default User;
