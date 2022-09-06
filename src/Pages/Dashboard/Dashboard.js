import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import dashboard from './dashboard.css';
import useAdmin from '../../hooks/UseAdmin';

const Dashboard = () => {
  const [user] =  useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div class="sidebar">
        <Link to='/Dashboard'>MY ORDER</Link>
        <Link to='/Dashboard/AddReview'>ADD REVIEW</Link>
        <Link to="/Dashboard/MyProfile">MY PROFILE</Link>
        <Link to="/Dashboard/ManageAllOrders">MANAGE ALL ORDERS</Link>
        <Link to="/Dashboard/AddProduct">ADD PRODUCTS</Link>
        {admin && <Link to="/Dashboard/MakeAdmin">MAKE ADMIN</Link>}
        <Link to="/Dashboard/ManageAllProducts">MANAGE ALL PRODUCTS</Link>
      </div>

      <div class="content">
        <h1>Dahboard</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;