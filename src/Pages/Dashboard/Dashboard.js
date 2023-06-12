import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import "./dashboard.css";
import useAdmin from "../../hooks/UseAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [isOpen, setIsOpen] = useState(true);
  let location = useLocation();

  const isActive = (routePath) => {
    return location.pathname === routePath;
  };

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
          <Link
            to="/Dashboard"
            className={isActive("/Dashboard") ? "active" : ""}
          >
            My Order
          </Link>

          <Link
            to="/Dashboard/MyProfile"
            className={isActive("/Dashboard/MyProfile") ? "active" : ""}
          >
            My Profile
          </Link>
          {admin && (
            <Link
              to="/Dashboard/ManageAllOrders"
              className={isActive("/Dashboard/ManageAllOrders") ? "active" : ""}
            >
              Manage All Orders
            </Link>
          )}
          {admin && (
            <Link
              to="/Dashboard/AddProduct"
              className={isActive("/Dashboard/AddProduct") ? "active" : ""}
            >
              Add Products
            </Link>
          )}
          {admin && (
            <Link
              to="/Dashboard/MakeAdmin"
              className={isActive("/Dashboard/MakeAdmin") ? "active" : ""}
            >
              Make Admin
            </Link>
          )}
          {admin && (
            <Link
              to="/Dashboard/ManageAllProducts"
              className={
                isActive("/Dashboard/ManageAllProducts") ? "active" : ""
              }
            >
              Manage All Products
            </Link>
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
