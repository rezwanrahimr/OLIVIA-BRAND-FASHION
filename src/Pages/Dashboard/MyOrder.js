import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';

const MyOrder = () => {
  const [products, setProducts] = useState([]);
  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/order/${email}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [user])

  if (loading) {
    return <Loading></Loading>
  }
  console.log(products)
  return (
    <div>
      <h1 className='text-center'>MY ORDER</h1>
      <div>
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'>PRODUCTS</th>
              <th scope='col'>TRANSACTION ID</th>
              <th scope='col'>QUANTITY</th>
              <th scope='col'>PRICE	</th>
              <th scope='col'>PAY MENT</th>
              <th scope='col'>CANCLE</th>
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
                  <p className='fw-normal mb-1'>Software engineer</p>
                  <p className='text-muted mb-0'>IT department</p>
                </td>
                <td>
                  <MDBBadge color='success' pill>
                    {product.productQuantity}
                  </MDBBadge>
                </td>
                <td>{product.CartProductPrice}</td>
                <td>
               <Link to={`/Dashboard/payment/${product._id}`}> <MDBBtn color="success">Payment</MDBBtn></Link>
                </td>
                <td>
                  <MDBBtn color='link' rounded size='sm'>
                    Edit
                  </MDBBtn>
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