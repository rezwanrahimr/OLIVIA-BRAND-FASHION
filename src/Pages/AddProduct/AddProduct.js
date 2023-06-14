import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Loading from "../Sheard/Loading";
import Swal from "sweetalert2";
import "./AddProduct.css";

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleForm = (event) => {
    event.preventDefault();
    // Set Loader.
    setIsLoading(true);
    // Get the form value.
    const form = event.target;
    const productName = form.productName.value;
    const ProductDescription = form.description.value;
    const ProductPrice = form.ProductPrice.value;
    const ProductStock = form.ProductStock.value;
    const BrandName = form.BrandName.value;
    const DiscountPrice = form.DiscountPrice.value;
    const Discount = form.Discount.value;
    const category = form.category.value;

    // get the image file from file input
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
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
          // Create Product Object
          const productData = {
            productName,
            ProductImage: data.data.url,
            ProductDescription,
            ProductPrice,
            ProductStock,
            BrandName,
            DiscountPrice,
            Discount: `${Discount}% off `,
            category,
          };

          // Store Product on Database
          fetch("https://olivia-brand-fashion-backend.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                setIsLoading(false);
                // Reset Form Data.
                form.reset();
                Swal.fire(
                  "Product Added!",
                  "You clicked the button!",
                  "success"
                );
              }
            });
        }
      });
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "50%" }}>
          <Card.Body>
            <h5 className="text-center my-1 fw-bold">ADD PRODUCTS</h5>
            <div className="d-flex justify-content-center">
              <form onSubmit={handleForm}>
                <label>Name</label>
                <input
                  required
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                />
                <br />

                <label>Price</label>
                <input
                  required
                  type="number"
                  name="ProductPrice"
                  placeholder="Product Price"
                />
                <br />
                <label>Stock</label>
                <input
                  required
                  type="number"
                  name="ProductStock"
                  placeholder="product stock"
                />
                <br />
                <label>Brand</label>
                <input
                  required
                  type="text"
                  name="BrandName"
                  className="my-2"
                  placeholder="brand name"
                />
                <br />
                <label>Discount</label>
                <input
                  type="number"
                  name="DiscountPrice"
                  placeholder="discount price"
                />
                <br />
                <label>Discount %</label>
                <input
                  type="number"
                  name="Discount"
                  className="my-2"
                  placeholder="discount %"
                />
                <br />
                <label>Category</label>
                <input
                  required
                  type="text"
                  name="category"
                  className="my-2"
                  placeholder="category"
                />
                <br />
                <label>Image</label>
                <input
                  required
                  class="form-control"
                  name="image"
                  type="file"
                  id="formFile"
                />
                <br />
                <label>Description</label>
                <textarea
                  required
                  class="form-control"
                  name="description"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <br />
                <div className="d-flex justify-content-center">
                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
