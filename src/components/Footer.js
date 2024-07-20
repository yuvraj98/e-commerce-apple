import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiApple } from 'react-icons/si';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-richblack-900 text-white py-20"> {/* Increased height by changing padding */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/3">
          <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-white"> {/* Increased text size */}
            <SiApple size={32} /> {/* Increased icon size */}
            <span>Apple</span>
          </a>
          <p className="text-sm text-gray-400 text-center md:text-left"> {/* Center text for small screens */}
            Copyright © {year} Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <a href="/" className="text-sm hover:text-gray-300">Privacy Policy</a>
            <a href="/" className="text-sm hover:text-gray-300">Terms of Use</a>
            <a href="/" className="text-sm hover:text-gray-300">Sales and Refunds</a>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8 md:w-2/3">
          <a href="/" className="text-sm hover:text-gray-300">Shop</a>
          <a href="/" className="text-sm hover:text-gray-300">Mac</a>
          <a href="/" className="text-sm hover:text-gray-300">iPhone</a>
          <a href="/" className="text-sm hover:text-gray-300">iPad</a>
          <a href="/" className="text-sm hover:text-gray-300">Watch</a>
          <a href="/" className="text-sm hover:text-gray-300">AirPods</a>
          <a href="/" className="text-sm hover:text-gray-300">TV & Home</a>
          <a href="/" className="text-sm hover:text-gray-300">Only at Apple</a>
          <a href="/" className="text-sm hover:text-gray-300">Accessories</a>
          <a href="/" className="text-sm hover:text-gray-300">Support</a>
        </nav>
        <div className="flex flex-col items-center md:items-end space-y-4 md:w-1/3">
          <div className="flex space-x-4">
            <a href="/" className="text-sm hover:text-gray-300">Site Map</a>
            <a href="/" className="text-sm hover:text-gray-300">Contact Us</a>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-sm hover:text-gray-300">
              <FaFacebook size={24} /> {/* Increased icon size */}
            </a>
            <a href="/" className="text-sm hover:text-gray-300">
              <FaTwitter size={24} /> {/* Increased icon size */}
            </a>
            <a href="/" className="text-sm hover:text-gray-300">
              <FaInstagram size={24} /> {/* Increased icon size */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
