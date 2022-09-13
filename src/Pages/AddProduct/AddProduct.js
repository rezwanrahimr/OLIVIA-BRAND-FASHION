import React from 'react';
import { Button, Card } from 'react-bootstrap';

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
           

            fetch('https://pacific-journey-95029.herokuapp.com/products',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(productData)
            })
            .then(res => res.json())
            .then(data =>{
                event.target.reset();
                alert('data added')
            })
    }
    return (
        <div>
        
    <div  className='d-flex justify-content-center'>
       
    <Card style={{ width: '18rem' }}>
      <Card.Body>
          <h5 className='text-center my-1 fw-bold'>ADD PRODUCTS</h5>
      <div className='d-flex justify-content-center'>
          <form onSubmit={handleForm}>
           <input type="text" name='productName' placeholder='Product Name' /><br />
            <input type="text" name='ProductImage' className='my-2' placeholder='ProductImage' /><br />
            <input type="text" name='ProductDescription' placeholder='ProductDescription' /><br />
            <input type="text" name='ProductPrice'className='my-2' placeholder='ProductPrice' /><br />
            <input type="text" name='ProductStock' placeholder='ProductStock' /><br />
            <input type="text" name='BrandName'className='my-2' placeholder='BrandName' /><br />
            <input type="text" name='DiscountPrice' placeholder='DiscountPrice' /><br />
            <input type="text" name='Discount'className='my-2' placeholder='Discount' /><br />
           <div className='d-flex justify-content-center'>
           <Button variant="dark" type='submit'>Submit</Button>
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