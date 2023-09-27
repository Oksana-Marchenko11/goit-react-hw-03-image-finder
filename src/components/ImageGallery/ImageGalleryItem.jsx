import React from 'react';

export const ImageGalleryItem = ({ data }) => {
  return data.map(image => (
    <li key={image.id}>
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  ));
};
