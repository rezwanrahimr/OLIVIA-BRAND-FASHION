import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { ProductCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartDetails from "../CartDetails/CartDetails";

function ProductCart() {
  const {
    cartItems,
    removeItem,
    addQuantity,
    removeQuantity,
    subTotal,
    totalPrice,
  } = useContext(ProductCartContext);
  // Handle Delete Items
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
    <section
      className="h-100 h-custom"
      style={{ backgroundColor: "#eee", marginTop: "85px" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <Link to="/shop" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </Link>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have items in your cart</p>
                      </div>
                    </div>

                    {cartItems?.map((product) => (
                      <MDBCard className="mb-3" key={product._id}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={product.ProductImage}
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5">
                                  {product.productName}
                                </MDBTypography>
                                {product.category}
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-normal mb-0"
                                >
                                  {product.productQuantity > 1 ? (
                                    <button
                                      onClick={() =>
                                        removeQuantity(product._id)
                                      }
                                      style={{
                                        border: "none",
                                        background: "none",
                                      }}
                                    >
                                      <i class="fa-solid fa-minus fa-fade"></i>
                                    </button>
                                  ) : (
                                    ""
                                  )}
                                </MDBTypography>
                              </div>
                              <div style={{ width: "50px" }}>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-normal mb-0"
                                >
                                  {product.productQuantity}
                                </MDBTypography>
                              </div>
                              <div style={{ width: "50px" }}>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-normal mb-0"
                                >
                                  <button
                                    onClick={() => addQuantity(product._id)}
                                    style={{
                                      border: "none",
                                      background: "none",
                                    }}
                                  >
                                    <i class="fa-solid fa-plus fa-fade"></i>
                                  </button>
                                </MDBTypography>
                              </div>
                              <div style={{ width: "80px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                  {product.UpdatePrice}
                                </MDBTypography>
                              </div>
                              <button
                                style={{
                                  color: "#cecece",
                                  border: "none",
                                  background: "none",
                                }}
                                onClick={() => handleDelete(product._id)}
                              >
                                <MDBIcon fas icon="trash-alt" />
                              </button>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                  </MDBCol>

                  <CartDetails
                    subTotal={subTotal}
                    totalPrice={totalPrice}
                  ></CartDetails>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default ProductCart;
