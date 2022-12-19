import React from 'react';
import styles from './CartPopup.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { ISushi } from '../../models/ISushi';
import { removeFromCartAll, openCloseCart, removeFromCartOne } from '../../redux/slices/cartSlice';

interface ICartPopup {}

export const CartPopup: React.FC<ICartPopup> = () => {
  const sushi: ISushi[] = useAppSelector((state) => state.cart.sushi);
  const sum: number = useAppSelector((state) => state.cart.sum);
  const dispatch = useAppDispatch();

  const onClickRemoveFromCartAll = (sushi: ISushi): void => {
    dispatch(removeFromCartAll(sushi));
  };

  const onClickRemoveFromCartOne = (sushi: ISushi): void => {
    dispatch(removeFromCartOne(sushi));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header_wrapper}>
        <div>
          <span className={styles.sushi_count}>
            Корзина:
            {sushi.length}
          </span>
          <span className={styles.sushi_sum}>: {sum} Р.</span>
        </div>
        <button className={styles.close_button} onClick={() => dispatch(openCloseCart())}>
          X
        </button>
      </div>
      <ul>
        {sushi.map((item, i) => (
          <li key={i} className={styles.sushi}>
            <span className={styles.sushi_title_and_price}>
              {item.title}: {item.price}
            </span>
            <span className={styles.sushi_category}>{item.category}</span>

            <img className={styles.sushi_img} src={item.imageUrl} alt="sushi" />
            <div className={styles.buttons_wrapper}>
              <button
                className={styles.button_remove_one_sushi}
                onClick={() => onClickRemoveFromCartAll(item)}>
                Убрать все роллы
              </button>
              <button
                className={styles.button_remove_all_sushi}
                onClick={() => onClickRemoveFromCartOne(item)}>
                Убрать один ролл
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
