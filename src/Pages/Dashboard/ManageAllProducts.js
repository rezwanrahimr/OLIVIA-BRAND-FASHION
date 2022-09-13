import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageAllProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://pacific-journey-95029.herokuapp.com/products',{

        })
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
        })
    },[])

    // Delete Products
    const HandleDelete = ( id) =>{
       const progress =  window.confirm("Are You Sure Delete this Item !");
       if(progress == true){
        fetch(`https://pacific-journey-95029.herokuapp.com/product/${id}`,{
            method:'DELETE',

        })
        .then(res => res.json())
        .then(data => {
            toast.success("Product Delete Successfully !")
            setProducts(products.filter(product => product._id !== id));
        })
       }

    }

    return (
        <div>
            <h1>Mangae all orders</h1>
            <div>
            <MDBTable align='middle'>
          <MDBTableHead>
            <tr >
              <th scope='col' className='fw-bold'>PRODUCTS</th>
              <th scope='col' className='fw-bold'>STOCK</th>
              <th scope='col' className='fw-bold'>PRICE	</th>
              <th scope='col' className='fw-bold'>DISCOUNT</th>
              <th scope='col' className='fw-bold'>DELETE</th>
            </tr>
          </MDBTableHead>
          {
            products.map(product => <MDBTableBody key={product._id}>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src={product.ProductImage}
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>{product.BrandName}</p>
                      <p className='text-muted mb-0'>{product.productName}</p>
                    </div>
                  </div>
                </td>
                
                <td>
                  <MDBBadge color='success' pill>
                    {product.ProductStock}
                  </MDBBadge>
                </td>
                <td className='fw-bold'><MDBBadge color='primary' pill>
                    {product.ProductPrice}
                  </MDBBadge></td>
                <td className='PaymentButton'>
                  {product.Discount ? <MDBBadge color='warning' pill>
                    {product.Discount}
                  </MDBBadge>:<MDBBadge color='success' pill>
                    NO DISCOUNT !
                  </MDBBadge>}
                </td>
                <td>
                <MDBBtn rounded color="danger" onClick={() => HandleDelete(product._id)}>DELETE</MDBBtn>
                </td>
              </tr>

            </MDBTableBody>)
          }
        </MDBTable>
            </div>
        </div>
    );
};

export default ManageAllProducts;