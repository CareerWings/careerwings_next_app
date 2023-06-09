import React from 'react';
import styles from './Card.module.css';

const Card = ({title, description,cicon }) => {
  const IconComponent = cicon;
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.icon}>
        {IconComponent && <IconComponent sx={{ fontSize: 80 }}/>} 
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
