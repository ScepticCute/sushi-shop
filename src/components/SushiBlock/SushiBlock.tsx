import React from 'react';
import { ISushi } from '../../models/ISushi';
import styles from './SushiBlock.module.scss';

export const SushiBlock: React.FC<ISushi> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sushi_img_wrapper}>
        <img className={styles.sushi_img} src={props.imageUrl} alt="sushi" />
      </div>
      <div className={styles.title}> {props.title} </div>
      <div className={styles.description}>
        Lorem ipsum dolor.Lorem ipsum dolor. Lorem ipsum dolor.Lorem ipsum dolor.
      </div>
      <div className={styles.category}>Категории</div>
      <button className={styles.buy_button}> Купить </button>
    </div>
  );
};
