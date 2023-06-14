import { MDBBtn, MDBTableBody } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Sheard/Loading";
import "./myprofile.css";
import { useContext } from "react";
import { useQuery } from "react-query";
import { authContext } from "../../context/AuthContext";

const MyProfile = () => {
  const { user, isLoading } = useContext(authContext);

  const { data: userData } = useQuery({
    queryKey: ["user", user],
    queryFn: async () => {
      const res = await fetch(
        `https://olivia-brand-fashion-backend.vercel.app/user/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center my-3">MY PROFILE</h1>
      <div className="profileContent d-flex justify-content-center mt-5 col-sm-12">
        <MDBTableBody>
          <tr>
            <td>
              {userData?.map((user) => (
                <div key={user._id} className="d-flex align-items-center ">
                  <img
                    src={user.Image}
                    alt=""
                    style={{ width: "95px", height: "95px" }}
                    className="rounded-circle"
                  />

                  <div className="ms-3">
                    <p className="fw-bold fs-3 mb-1">Name: {user.Name}</p>
                    <p className="text-muted fs-4 mb-0">Email: {user.email}</p>
                    <p className="text-muted fs-4 mb-0">Phone: {user.Number}</p>
                    <p className="text-muted fs-4 mb-0">
                      Address: {user.Address}
                    </p>
                    <div>
                      <Link to={`/updateProfile/${user._id}`}>
                        <MDBBtn color="dark">Update</MDBBtn>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </td>
          </tr>
        </MDBTableBody>
      </div>
    </div>
  );
};

export default MyProfile;
