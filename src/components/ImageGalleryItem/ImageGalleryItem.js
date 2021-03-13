import React from 'react';
import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => (
  <li className={s.ImageGalleryItem}>
    <img src={largeImageURL} alt={tags} className={s.ImageGalleryItemImage} />
  </li>
);

export default ImageGalleryItem;
