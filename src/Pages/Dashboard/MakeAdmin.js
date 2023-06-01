import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import User from "./User";

const MakeAdmin = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://olivia-brand-fashion-backend.vercel.app/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col" className="fw-bold">
              Name
            </th>
            <th scope="col" className="fw-bold">
              Position
            </th>
            <th scope="col" className="fw-bold">
              Status
            </th>
            <th scope="col" className="fw-bold">
              Make Admin
            </th>
            <th scope="col" className="fw-bold">
              Remove
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users?.map((user) => (
            <User key={user?._id} setUser={setUser} user={user}></User>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default MakeAdmin;
