import React from 'react';

const ImageList = ({ images }) => {
  const imagesToRender = images.map(({ id, urls, alt_description }) => {
    return <img src={urls.regular} alt={alt_description} key={id} />;
  });
  return <div>{imagesToRender}</div>;
};

export default ImageList;
