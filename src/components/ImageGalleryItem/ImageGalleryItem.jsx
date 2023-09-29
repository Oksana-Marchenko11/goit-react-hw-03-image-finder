import React from 'react';

export const ImageGalleryItem = ({ image, key }) => {
  return (
    <li key={key}>
      <img
        key={key}
        src={image.webformatURL}
        alt={image.tags}
        data-large-img={image.largeImageURL}
      />
    </li>
  );
};
