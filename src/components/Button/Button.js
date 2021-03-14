import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="submit" className={s.Button}>
      Load more
    </button>
  );
};

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});

export default Button;

// Button.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };
