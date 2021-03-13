import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ gallery }) => {
  console.log('gallery.lengt', gallery);
  if (gallery.length) {
    console.log('53424');
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
  } else {
    return <div>000</div>;
  }
};

export default ImageGallery;
