import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import Orders from '../components/Order';

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
