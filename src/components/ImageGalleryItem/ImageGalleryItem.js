import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
// import noPoster from './noPoster.jpg';

class ImageGalleryItem extends Component {
  state = {};
  render() {
    const {
      webformatURL,
      tags,
      largeImageURL,
      modalImg,
      showModal,
    } = this.props;

    return (
      <li className={s.ImageGalleryItem}>
        <img
          onClick={() => {
            showModal();
            modalImg(largeImageURL, tags);
          }}
          src={webformatURL}
          alt={tags}
          className={s.ImageGalleryItemImage}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  showModal: PropTypes.func.isRequired,
  modalImg: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
