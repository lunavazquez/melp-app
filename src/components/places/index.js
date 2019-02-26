import React from 'react';
import styles from './index.module.sass';

const Places = ({ places, handleClick }) => {
  return places.map(({ id, name }) => {
    return (
      <div key={id} onClick={() => handleClick(id)} className={styles.place}>
        {name}
      </div>
    );
  });
};

export default Places;
