import {
  MDBBadge,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Sheard/Loading";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  // Load all orders
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["get-all-orders"],
    queryFn: async () => {
      const res = await fetch(
        "https://olivia-brand-fashion-backend.vercel.app/get-all-orders"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // Delete Order
  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure? This Product is Already Payment",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://olivia-brand-fashion-backend.vercel.app/delete-order/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };
  return (
    <div className="mt-3 order-container">
      <MDBTable align="middle">
        <MDBTableHead className="table-dark">
          <tr>
            <th scope="col" className="fw-bold">
              No
            </th>
            <th scope="col" className="fw-bold">
              Products
            </th>
            <th scope="col" className="fw-bold">
              Transaction{" "}
            </th>

            <th scope="col" className="fw-bold">
              Quantity
            </th>
            <th scope="col" className="fw-bold">
              Price{" "}
            </th>
            <th scope="col" className="fw-bold"></th>
          </tr>
        </MDBTableHead>
        {orders?.map((order, index) => (
          <MDBTableBody key={order._id}>
            <tr>
              <td>{index + 1}</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={order.ProductImage}
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{order.productName}</p>
                    <p className="text-muted mb-0">{order.userName}</p>
                  </div>
                </div>
              </td>
              <td>
                <span className="fw-bold">{order.transactionId}</span>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  {order.productQuantity}
                </MDBBadge>
              </td>
              <td className="fw-bold">{order.UpdatePrice}</td>
              <td>
                <button
                  type="button"
                  className="bg-none border-0"
                  onClick={() => handleDeleteOrder(order._id)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
    </div>
  );
};

export default ManageAllOrders;
