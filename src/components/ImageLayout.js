import React from 'react';
import 'tailwindcss/tailwind.css';

const ImageLayout = ({ img6, img7 }) => {
  return (
    <div className="flex w-screen h-screen p-4">
      <div className="w-1/2 h-full p-2">
        <img src={img6} className="w-full h-full object-cover rounded-lg shadow-md" alt="Image 1" />
      </div>
      <div className="w-1/2 h-full p-2">
        <img src={img7} className="w-full h-full object-cover rounded-lg shadow-md" alt="Image 2" />
      </div>
    </div>
  );
};

export default ImageLayout;
