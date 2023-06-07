import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import "./dashboard.css";
import useAdmin from "../../hooks/UseAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="sidebar-container">
        <div className="toggleBar">
          {isOpen === false ? (
            <i class="fa-solid fa-list" onClick={() => setIsOpen(!isOpen)}></i>
          ) : (
            <i class="fa-solid fa-xmark" onClick={() => setIsOpen(!isOpen)}></i>
          )}
        </div>
        <div className={`sidebar ${isOpen === false ? "sidebarDisplay" : ""}`}>
          <Link to="/Dashboard">MY ORDER</Link>
          <Link to="/Dashboard/AddReview">ADD REVIEW</Link>
          <Link to="/Dashboard/MyProfile">MY PROFILE</Link>
          {admin && (
            <Link to="/Dashboard/ManageAllOrders">MANAGE ALL ORDERS</Link>
          )}
          {admin && <Link to="/Dashboard/AddProduct">ADD PRODUCTS</Link>}
          {admin && <Link to="/Dashboard/MakeAdmin">MAKE ADMIN</Link>}
          {admin && (
            <Link to="/Dashboard/ManageAllProducts">MANAGE ALL PRODUCTS</Link>
          )}
        </div>
      </div>

      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
