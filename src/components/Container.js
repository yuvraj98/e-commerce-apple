import React from 'react';

const Container = ({ imageSrc, description, side }) => {
  const isLeft = side === 'left';
  return (
    <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} my-10 items-center bg-gray-100 rounded-lg shadow-md`} style={{ height: '400px', margin: '20px 0', padding: '20px' }}>
      <div className="w-full md:w-1/2 p-5 flex justify-center items-center border-r md:border-b-0 border-gray-300 h-full">
        <img src={imageSrc} alt="Product" className="w-full max-w-md rounded-lg object-cover h-full" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left flex justify-center items-center h-full">
        <p className="text-xl md:text-2xl leading-relaxed text-gray-800 border-l md:border-t-0 border-gray-300 p-4">{description}</p>
      </div>
    </div>
  );
};

export default Container;
