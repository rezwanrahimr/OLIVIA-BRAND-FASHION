import React from 'react';

const AddProduct = () => {

    const handleForm = event =>{
        event.preventDefault();
            const productName = event.target.productName.value;
            const ProductImage = event.target.ProductImage.value;
            const ProductDescription = event.target.ProductDescription.value;
            const ProductPrice = event.target.ProductPrice.value;
            const ProductStock = event.target.ProductStock.value;
            const BrandName = event.target.BrandName.value;
            const DiscountPrice = event.target.DiscountPrice.value;
            const Discount = event.target.Discount.value;

            const productData = {productName,ProductImage,ProductDescription,ProductPrice,ProductStock,BrandName,DiscountPrice,Discount}
            console.log(productData)

            fetch('http://localhost:5000/products',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(productData)
            })
            .then(res => res.json())
            .then(data =>{
                alert('data added')
            })
    }
    return (
        <div>
            <h1>Add Product</h1>
          <div className='d-flex justify-content-center'>
          <form onSubmit={handleForm}>
           <input type="text" name='productName' placeholder='Product Name' /><br />
            <input type="text" name='ProductImage' placeholder='ProductImage' /><br />
            <input type="text" name='ProductDescription' placeholder='ProductDescription' /><br />
            <input type="text" name='ProductPrice' placeholder='ProductPrice' /><br />
            <input type="text" name='ProductStock' placeholder='ProductStock' /><br />
            <input type="text" name='BrandName' placeholder='BrandName' /><br />
            <input type="text" name='DiscountPrice' placeholder='DiscountPrice' /><br />
            <input type="text" name='Discount' placeholder='Discount' /><br />
            <input type="reset" defaultValue="Reset" />  
            <button type="submit">submit</button>
           </form>
          </div>
            
        </div>
    );
};

export default AddProduct;