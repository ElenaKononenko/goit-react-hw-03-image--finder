import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.hanleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hanleKeyDown);
  }

  hanleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    console.log(e);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { selectedImg, tags } = this.props;
    return createPortal(
      <>
        <div className={s.Overlay} onClick={this.handleBackdropClick}>
          <div className={s.Modal}>
            <img src={selectedImg} alt={tags} />
          </div>
        </div>
      </>,
      modalRoot,
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
