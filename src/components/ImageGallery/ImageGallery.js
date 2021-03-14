import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ gallery }) => {
  return (
    <ul className={s.ImageGallery}>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
