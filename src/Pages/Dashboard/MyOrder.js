import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';


const MyOrder = () => {
  const [products, setProducts] = useState([]);
  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    fetch(`https://pacific-journey-95029.herokuapp.com/order/${email}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [user])

  if (loading) {
    return <Loading></Loading>
  }

  // Handle Delete.
  const HandleDelete = id =>{
    fetch(`https://pacific-journey-95029.herokuapp.com/order/${id}`,{
      method:'DELETE',
      
    })
    .then(res => res.json())
    .then(data => {
      toast.success("This Order is Cancelled !")
      setProducts(products.filter((prodcut) => prodcut._id !== id));
    })
  }
  return (
    <div>
      <h1 className='text-center fw-bold my-4'>MY ORDER</h1>
      <div>
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr >
              <th scope='col' className='fw-bold'>PRODUCTS</th>
              <th scope='col' className='fw-bold'>TRANSACTION ID</th>
              <th scope='col' className='fw-bold'>QUANTITY</th>
              <th scope='col' className='fw-bold'>PRICE	</th>
              <th scope='col' className='fw-bold'>PAY MENT</th>
              <th scope='col' className='fw-bold'>CANCLE</th>
            </tr>
          </MDBTableHead>
          {
            products.map(product => <MDBTableBody key={product._id}>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src={product.CartProductImage}
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>{product.CartProductName}</p>
                      <p className='text-muted mb-0'>{product.userName}</p>
                    </div>
                  </div>
                </td>
                <td>
                <span className='fw-bold'> {product.transationId}</span>
                </td>
                <td>
                  <MDBBadge color='success' pill>
                    {product.productQuantity}
                  </MDBBadge>
                </td>
                <td className='fw-bold'>{product.CartProductPrice}</td>
                <td className='PaymentButton'>
                  {
                    (!product.paid) && <Link to={`/Dashboard/payment/${product._id}`}>  <MDBBtn rounded color="success">Payment</MDBBtn></Link>

                  }
                  {
                    (product.paid) && <MDBBtn rounded disabled color="success">Paid</MDBBtn>
                  }
                </td>
                <td>
                <MDBBtn rounded color="danger" className={`${product.paid ? 'disabled':''}`}  onClick={() => HandleDelete(product._id)}>Cancle order</MDBBtn>
                </td>
              </tr>

            </MDBTableBody>)
          }
        </MDBTable>
      </div>
    </div>
  );
};

export default MyOrder;