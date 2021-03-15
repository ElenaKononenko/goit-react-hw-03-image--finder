import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  state = {};
  render() {
    const { gallery, modalImg, showModal } = this.props;
    return (
      <ul className={s.ImageGallery}>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              modalImg={modalImg}
              showModal={showModal}
            ></ImageGalleryItem>
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
ImageGallery.propTypes = {
  showModal: PropTypes.func.isRequired,
  modalImg: PropTypes.func.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
