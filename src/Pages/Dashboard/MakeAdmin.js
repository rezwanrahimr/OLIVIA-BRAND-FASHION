import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";
import User from "./User";
import { useQuery } from "react-query";
import Loading from "../Sheard/Loading";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

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
            <User key={user?._id} user={user} refetch={refetch}></User>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default MakeAdmin;
