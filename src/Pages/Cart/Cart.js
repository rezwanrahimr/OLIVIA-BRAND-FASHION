import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtnGroup, MDBBtn } from 'mdb-react-ui-kit';
import cart from './cart.css';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Cart = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [productData, setProductData] = useState([{}]);
    const [cart, setCart] = useState({ ...productData, productQuantity: 1, productTotalPrice: 0 })
    useEffect(() => {
        fetch(`https://pacific-journey-95029.herokuapp.com/products/${id}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accesToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProductData(data))

    }, [id])

    if(loading){
        return <loading></loading>
    }
    if(error){
        return toast.error(error.message);
    }


    // Product Total Price.
    const productPrice = productData[0]?.ProductPrice;
    const price = parseInt(productPrice) * parseInt(cart.productQuantity);


    // Product Quantity.
    const handleProductQuantity = (type) => {
        if (type === "add" && cart.productQuantity < productData[0].ProductStock) {
         
            setCart({ ...cart, productQuantity: Number(cart.productQuantity) + 1 });
            return;
        }
        if (type === "remove" && cart.productQuantity > 1) {
            setCart({ ...cart, productQuantity: Number(cart.productQuantity) - 1 });
            return;
        }
    }
    const productQuantity = cart?.productQuantity;
    const CartProductPrice = price;
    const userName = user?.email;
    const CartProductName = productData[0]?.productName;
    const CartProductImage = productData[0]?.ProductImage;
    const CartProductData = {CartProductName,CartProductImage,productQuantity,CartProductPrice,userName}
  

    // Payment
   const handleByeNow = () =>{
    fetch('https://pacific-journey-95029.herokuapp.com/payment',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(CartProductData)
    })
    .then(res => res.json())
    .then(data => {
        
    })
   }
    return (
        <div className='mt-5'>
            <h1 className='text-center text-black fw-bold text-uppercase'>Your cart</h1>
            <div className='d-flex justify-content-center align-items-center'>
                {
                    productData?.map(product => <MDBCard key={product?._id} style={{ maxWidth: '740px' }}>
                        <MDBRow className='g-0'>
                            <MDBCol className='d-flex' md='4'>
                                <MDBCardImage src={product?.ProductImage} alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='8'>
                                <MDBCardBody>
                                    <MDBCardTitle className='text-uppercase'>{product?.productName}</MDBCardTitle>
                                    <MDBCardText>
                                        <p className='productDec'>The Beauty is in the name.Wear this rakish grey plaid jacket and all will know that you are the Boss.Named after the 3 time Melboume Cup winning champion Jacket of Makybe Diva,Glen,Boss,Featuring a notch lapel and made from perminum super 130%s 100% wool.</p>
                                        -Length:109cm <br />
                                        -Regular fit <br />
                                        -Wrap-style front <br />
                                        -Ruched Detailing<br />
                                        -Invisible Zip Fastening on the back
                                        <p className='fw-bold'>Price: {price}</p>
                                    </MDBCardText>
                                    <MDBBtnGroup shadow='0'>
                                        <MDBBtn className='fw-bold fs-4' color='light' onClick={() => handleProductQuantity('remove')}>-</MDBBtn>
                                        <MDBBtn color='light'><input type="number" name="productQuantity" value={cart?.productQuantity || 1} id="" /></MDBBtn>
                                        <MDBBtn className=' fs-4' color='light' onClick={() => handleProductQuantity('add')}>+</MDBBtn>
                                    </MDBBtnGroup>
                                    <MDBCardText>
                                        <div className='checkOutBtn'>
                                            <Link to="/Dashboard"><button onClick={handleByeNow} className='text-white'>CHECK OUT</button></Link>
                                        </div>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>)
                }
            </div>
        </div>
    );
};

export default Cart;