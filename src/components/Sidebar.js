import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement any logout logic here (e.g., clearing authentication tokens)
    navigate('/');
  };

  return (
    <div className="w-64 h-screen bg-richblack-700 text-white flex flex-col">
      <Link to="/dashboard/profile" className="p-4 hover:bg-gray-700">Profile</Link>
      <Link to="/dashboard/orders" className="p-4 hover:bg-gray-700">Orders</Link>
      <button onClick={handleLogout} className="p-4 hover:bg-gray-700 text-left">Logout</button>
    </div>
  );
};

export default Sidebar;
