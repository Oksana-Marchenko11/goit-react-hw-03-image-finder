import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './imageGallery.styled';

export const ImageGallery = ({ data }) => {
  return (
    <ImageGalleryList>
      {data.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ImageGalleryList>
  );
};
