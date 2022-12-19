import React from 'react';

import styles from './SushiSlider.module.scss';

import { useGetSushiQuery } from '../../redux/sushiApi';

import { ISushi } from '../../models/ISushi';

import { NotFoundBlock } from '../NotFoundBlock/NotFoundBlock';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from './sliderConfig';

import Skeleton from './Skeleton';
import { addToCart } from '../../redux/slices/cartSlice';

export const SushiSlider: React.FC = () => {
  const { data = [], isFetching, isError } = useGetSushiQuery({ limit: 12 });

  const dispatch = useAppDispatch();

  const onClickBuyButton = (item: ISushi) => {
    dispatch(addToCart(item));
  };

  if (isError) return <NotFoundBlock httpError={404} />;

  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {isFetching
          ? [...new Array(10)].map((_, index) => (
              <div key={index} className={styles.slide}>
                <Skeleton />
              </div>
            ))
          : data.map((item: ISushi, index: number) => (
              <div key={index} className={styles.slide}>
                <img src={item.imageUrl} alt="best sushi" className={styles.slide_img} />
                <div className={styles.footer_wrapper}>
                  <div>
                    <h2 className={styles.title}> {item.title} </h2>
                    <span className={styles.category}>{item.category}</span>
                    <span className={styles.price}>{item.price} ₽</span>
                  </div>
                  <button className={styles.buy_button} onClick={() => onClickBuyButton(item)}>
                    Купить
                  </button>
                </div>
              </div>
            ))}
        {}
      </Slider>
    </div>
  );
};
