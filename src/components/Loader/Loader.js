import React from 'react';
import Loade from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <Loade
      type="BallTriangle"
      color="#00BFFF"
      height={80}
      width={80}
      className={s.Loader}
    />
  );
};

export default Loader;
