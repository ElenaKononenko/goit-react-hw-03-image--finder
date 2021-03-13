import React from 'react';
import Loade from 'react-loader-spinner';

const Loader = () => {
  return (
    <Loade
      type="BallTriangle"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}
    />
  );
};

export default Loader;
