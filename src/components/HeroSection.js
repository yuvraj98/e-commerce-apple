// src/components/HeroSection.js
import React from 'react';
import img1 from '../assets/iPhone_15Pro_Titanium.webp';
import img2 from '../assets/images/airpods.png';
import img3 from '../assets/images/mac.png';
import img4 from '../assets/images/titanium.jpeg';
import img5 from '../assets/images/appletv.png';
import img6 from '../assets/images/watch1.jpeg';
import img7 from '../assets/applemobile.jpg';
import img8 from '../assets/iMac1.webp';

const products = [
  { id: 1, name: 'Product 1', image: img1, link: '/orderPage/1' },
  { id: 2, name: 'Product 2', image: img2, link: '/orderPage/2' },
  { id: 3, name: 'Product 3', image: img3, link: '/orderPage/3' },
  { id: 4, name: 'Product 4', image: img4, link: '/orderPage/4' },
  { id: 5, name: 'Product 5', image: img5, link: '/orderPage/5' },
  { id: 6, name: 'Product 6', image: img6, link: '/orderPage/6' },
  { id: 7, name: 'Product 7', image: img7, link: '/orderPage/7' },
  { id: 8, name: 'Product 8', image: img8, link: '/orderPage/8' },
];

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 overflow-hidden">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
        <a
          href={product.link}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="text-center py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-richblack-900 via-richblack-700 to-richblack-900 text-transparent bg-clip-text animate-fadeIn">
          Welcome to Apple Store
        </h1>

        <div className="text-xl mb-12">
          <p className="text-4xl leading-snug bg-gradient-to-r from-richblue-800 via-richblue-600 to-richblue-800 text-transparent bg-clip-text font-bold animate-fadeIn">
            The Best Way to Buy the Product you Love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
