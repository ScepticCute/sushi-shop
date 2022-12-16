import React from 'react';
import styles from './SushiBlock.module.scss';

import { ISushi } from '../../models/ISushi';

import { useAppDispatch } from '../../hooks/redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { PopupSushiBlock } from '../PopupSushiBlock/PopupSushiBlock';

export const SushiBlock: React.FC<ISushi> = (props) => {
  const dispatch = useAppDispatch();

  const onClickAddToCart = (item: ISushi) => {
    dispatch(addToCart(item));
  };

  const onClickOpenPopupBlock = () => {
    return <PopupSushiBlock />;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sushi_img_wrapper}>
        <img
          className={styles.sushi_img}
          src={props.imageUrl}
          alt="sushi"
          onClick={onClickOpenPopupBlock}
        />
      </div>
      <div className={styles.title}> {props.title} </div>
      <div className={styles.description}>
        Lorem ipsum dolor.Lorem ipsum dolor. Lorem ipsum dolor.Lorem ipsum dolor.
      </div>
      <div className={styles.category}>{props.category}</div>
      <div className={styles.footer_wrapper}>
        <div className={styles.price}> {props.price} ₽</div>

        <button
          onClick={() => {
            onClickAddToCart(props);
          }}
          className={styles.buy_button}>
          Купить
        </button>
      </div>
    </div>
  );
};
