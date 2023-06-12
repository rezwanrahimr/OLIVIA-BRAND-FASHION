import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Sheard/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageAllProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://olivia-brand-fashion-backend.vercel.app/products"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // Delete Products
  const HandleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://olivia-brand-fashion-backend.vercel.app/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire(
                "Product Delete Successfully !",
                "You clicked the button!",
                "success"
              );
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <h1>Manage all orders</h1>
      <div>
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col" className="fw-bold">
                PRODUCTS
              </th>
              <th scope="col" className="fw-bold">
                STOCK
              </th>
              <th scope="col" className="fw-bold">
                PRICE{" "}
              </th>
              <th scope="col" className="fw-bold">
                DISCOUNT
              </th>
              <th scope="col" className="fw-bold">
                UPDATE
              </th>
              <th scope="col" className="fw-bold">
                DELETE
              </th>
            </tr>
          </MDBTableHead>
          {products.map((product) => (
            <MDBTableBody key={product._id}>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={product.ProductImage}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{product.BrandName}</p>
                      <p className="text-muted mb-0">{product.productName}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <MDBBadge color="success" pill>
                    {product.ProductStock}
                  </MDBBadge>
                </td>
                <td className="fw-bold">
                  <MDBBadge color="primary" pill>
                    {product.ProductPrice}
                  </MDBBadge>
                </td>
                <td className="PaymentButton">
                  {product.Discount ? (
                    <MDBBadge color="warning" pill>
                      {product.Discount}
                    </MDBBadge>
                  ) : (
                    <MDBBadge color="success" pill>
                      NO DISCOUNT !
                    </MDBBadge>
                  )}
                </td>
                <td>
                  <Link to={`/Dashboard/product-update/${product._id}`}>
                    <MDBBtn rounded color="success">
                      EDIT
                    </MDBBtn>
                  </Link>
                </td>
                <td>
                  <MDBBtn
                    rounded
                    color="danger"
                    onClick={() => HandleDelete(product._id)}
                  >
                    DELETE
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          ))}
        </MDBTable>
      </div>
    </div>
  );
};

export default ManageAllProducts;
