import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Sheard/Loading';

const ManageAllOrders = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://pacific-journey-95029.herokuapp.com/orders', {

        })
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])

    console.log();

    // Delete Order
    const handleDeleteOrder = (id) => {
        const process = window.confirm("Are Your Sure !")
        if (process === true) {
            fetch(`https://pacific-journey-95029.herokuapp.com/order/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    toast.error("This Order is Cancelled !")
                    setOrder(orders.filter((order) => order._id !== id))
                })
        }

    }
    return (
        <div className='mt-3'>
            <MDBTable align='middle'>
                {
                    orders.map(order => <MDBTableBody key={order._id}>
                        <tr>
                            <td>
                                <div className='d-flex align-items-center'>
                                    <img
                                        src={order.CartProductImage}
                                        alt=''
                                        style={{ width: '45px', height: '45px' }}
                                        className='rounded-circle'
                                    />
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>{order.CartProductName}</p>
                                        <p className='text-muted mb-0'>{order.userName}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className='fw-bold'>{order.transationId}</span>
                            </td>
                            <td>
                                <MDBBadge color='success' pill>
                                    {order.productQuantity}
                                </MDBBadge>
                            </td>
                            <td className='fw-bold'>{order.CartProductPrice}</td>
                            <td >
                                {
                                    (order.paid) && <MDBBtn rounded color="success">Paid</MDBBtn>
                                }
                                {
                                    (!order.paid) && <MDBBtn rounded color="danger">Not Paid</MDBBtn>
                                }
                            </td>
                            <td>
                                <MDBBtn rounded color="danger" onClick={() => handleDeleteOrder(order._id)} >Delete Order</MDBBtn>
                            </td>
                        </tr>

                    </MDBTableBody>)
                }
            </MDBTable>
        </div>
    );
};

export default ManageAllOrders;