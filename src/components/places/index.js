import React from 'react';
import styles from './index.module.sass';

const Places = ({ places, handleClick }) => {
  return places.map(({ id, name, rating }) => {
    return (
      <div key={id} onClick={() => handleClick(id)} className={styles.place}>
        <p>{name}</p>
        <p>Stars {rating}</p>
      </div>
    );
  });
};

export default Places;
