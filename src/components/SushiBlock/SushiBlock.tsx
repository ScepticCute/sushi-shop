import React from 'react';
import styles from './SushiBlock.module.scss';

import { ISushi } from '../../models/ISushi';

import { useAppDispatch } from '../../hooks/redux';
import { addToCart } from '../../redux/slices/cartSlice';

export const SushiBlock: React.FC<ISushi> = (props) => {
  const dispatch = useAppDispatch();

  const onClickAddToCart = (item: ISushi) => {
    dispatch(addToCart(item));
  };

  const [active, setActive] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sushi_img_wrapper}>
        <img
          className={styles.sushi_img}
          onClick={() => (active ? setActive(false) : setActive(true))}
          src={props.imageUrl}
          alt="sushi"
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
