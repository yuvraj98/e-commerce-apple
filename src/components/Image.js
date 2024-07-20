import React from 'react';

const Image = ({ imageUrl, altText }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-90 z-50">
      <img src={imageUrl} alt={altText} className="max-w-full max-h-full" />
    </div>
  );
};

export default Image;
