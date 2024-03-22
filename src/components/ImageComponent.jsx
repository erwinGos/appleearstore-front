import React, { useState, useEffect } from 'react';

const ImageComponent = ({ base64Data }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (base64Data) {
      const url = `data:image/png;base64,${base64Data}`;
      setImageUrl(url);
    }
  }, [base64Data]);

  return (
      imageUrl && 
        <img src={imageUrl} className="h-24 w-24 rounded-md object-cover object-center sm:h-28 sm:w-28" />
      
  );
};

export default ImageComponent;
