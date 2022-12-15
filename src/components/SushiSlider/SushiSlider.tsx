import React from 'react';
import styles from './SushiSlider.module.scss';

import { useGetSushiQuery } from '../../redux/sushiApi';

import { ISushi } from '../../models/ISushi';

import { NotFoundBlock } from '../NotFoundBlock/NotFoundBlock';
import { useAppSelector } from '../../hooks/redux';

export const SushiSlider: React.FC = () => {
  const filter = useAppSelector((state) => state.filter);

  const { data = [], isLoading, isError } = useGetSushiQuery(filter);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <NotFoundBlock httpError={404} />;

  return (
    <div className={styles.wrapper}>
      {data.map((item: ISushi, index: number) => (
        <div key={index} className={styles.slide}>
          <img src={item.imageUrl} alt="Sushi" />
        </div>
      ))}
    </div>
  );
};
