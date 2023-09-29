import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  return (
    <ul className="gallery">
      {data.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ul>
  );
};
