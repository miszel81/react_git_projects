import './ImageList.css';
import React from 'react';
import ImageItem from './ImageItem';

const ImageList = ({ images }) => {
  const imagesToRender = images.map((image) => {
    return <ImageItem key={image.id} image={image} />;
  });
  return <div className="image-list">{imagesToRender}</div>;
};

export default ImageList;
