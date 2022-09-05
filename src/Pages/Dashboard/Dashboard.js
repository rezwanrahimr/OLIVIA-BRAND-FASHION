import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import dashboard from './dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <div class="sidebar">
        <Link to='/Dashboard'>MY ORDER</Link>
        <Link to='/Dashboard/AddReview'>ADD REVIEW</Link>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <div class="content">
        <h1>Dahboard</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;