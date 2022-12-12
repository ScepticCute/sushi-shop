import React from 'react';
import styles from './SushiBlock.module.scss';

interface IProps {
  id?: number;
  title?: string;
  rating?: number;
  imageUrl?: string;
  category?: [];
} // почини

export const SushiBlock: React.FC = (props: IProps) => {
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
