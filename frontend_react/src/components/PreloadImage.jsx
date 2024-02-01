import React from 'react';

const PreloadImage = ({ src, alt }) => {
  React.useEffect(() => {
    const image = new Image();
    image.src = src;
  }, [src]);

  return <img src={src} alt={alt} style={{ display: 'none' }} />;
};

export default PreloadImage;