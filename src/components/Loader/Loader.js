import React from 'react';

import Loade from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.Loader}>
      <Loade
        type="TailSpin"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default Loader;
