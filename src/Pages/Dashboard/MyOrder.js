import {
  MDBBadge,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Sheard/Loading";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { ProductCartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const MyOrder = () => {
  const [products, setProducts] = useState([]);
  const { user, isLoading } = useContext(authContext);
  const { cartItems, removeItem } = useContext(ProductCartContext);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://olivia-brand-fashion-backend.vercel.app/get-order-details?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          let allProducts = [];
          if (cartItems !== null) {
            allProducts = [...cartItems, ...data];
          } else {
            allProducts = [...data];
          }
          setProducts(allProducts);
        });
    }
  }, [user?.email, cartItems]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  // Handle Delete.
  const HandleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <div>
        <MDBTable align="middle">
          <MDBTableHead className="table-dark">
            <tr>
              <th scope="col" className="fw-bold">
                NO
              </th>
              <th scope="col" className="fw-bold">
                PRODUCTS
              </th>
              <th scope="col" className="fw-bold">
                QUANTITY
              </th>
              <th scope="col" className="fw-bold">
                PRICE{" "}
              </th>
              <th scope="col" className="fw-bold">
                PAY MENT
              </th>
            </tr>
          </MDBTableHead>
          {products.map((product, i) => (
            <MDBTableBody key={product._id}>
              <tr>
                <td>{i + 1}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={product.ProductImage}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{product.productName}</p>
                      <p className="text-muted mb-0">{product.userName}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <MDBBadge color="success" pill>
                    {product.productQuantity}
                  </MDBBadge>
                </td>
                <td className="fw-bold">{product.UpdatePrice}</td>
                <td className="PaymentButton">
                  {product?.transactionId ? (
                    <p>
                      <span className="fw-bold"> Paid</span> <br /> $
                      {product.transactionId}
                    </p>
                  ) : (
                    <>
                      <Link to="/productsCart">
                        <button
                          type="button"
                          className="btn btn-light btn-rounded"
                        >
                          {" "}
                          payment
                        </button>
                      </Link>

                      <button
                        onClick={() => HandleDelete(product._id)}
                        type="button"
                        className="btn btn-light btn-rounded ms-3"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            </MDBTableBody>
          ))}
        </MDBTable>
      </div>
    </div>
  );
};

export default MyOrder;
