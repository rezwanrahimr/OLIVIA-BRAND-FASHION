import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Sheard/Loading";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const { data = [], isLoading: load } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = await res.json();
      return data;
    },
  });

  if (load || isLoading) {
    return <Loading></Loading>;
  }

  const {
    productName,
    ProductDescription,
    ProductPrice,
    ProductStock,
    BrandName,
    DiscountPrice,
    Discount,
    category,
  } = data[0];

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
            ProductImage: data?.data?.url,
            ProductDescription,
            ProductPrice,
            ProductStock,
            BrandName,
            DiscountPrice,
            Discount,
            category,
          };

          console.log(productData);
          // Store Product on Database
          fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
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
                  "Product Update!",
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
            <h5 className="text-center my-1 fw-bold">UPDATE PRODUCTS</h5>
            <div className="d-flex justify-content-center">
              <form onSubmit={handleForm}>
                <label>Name</label>
                <input
                  defaultValue={productName}
                  required
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                />
                <br />

                <label>Price</label>
                <input
                  defaultValue={ProductPrice}
                  required
                  type="number"
                  name="ProductPrice"
                  placeholder="Product Price"
                />
                <br />
                <label>Stock</label>
                <input
                  defaultValue={ProductStock}
                  required
                  type="number"
                  name="ProductStock"
                  placeholder="product stock"
                />
                <br />
                <label>Brand</label>
                <input
                  defaultValue={BrandName}
                  required
                  type="text"
                  name="BrandName"
                  className="my-2"
                  placeholder="brand name"
                />
                <br />
                <label>Discount</label>
                <input
                  defaultValue={DiscountPrice}
                  type="number"
                  name="DiscountPrice"
                  placeholder="discount price"
                />
                <br />
                <label>Discount %</label>
                <input
                  defaultValue={Discount}
                  type="number"
                  name="Discount"
                  className="my-2"
                  placeholder="discount %"
                />
                <br />
                <label>Category</label>
                <input
                  defaultValue={category}
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
                  defaultValue={ProductDescription}
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

export default UpdateProduct;
