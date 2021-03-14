import React from 'react';
import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ webformatURL, tags }) => (
  <li className={s.ImageGalleryItem}>
    <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
  </li>
);

export default ImageGalleryItem;
