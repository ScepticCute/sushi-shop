import React from 'react';
import styles from './SushiSlider.module.scss';

import { useGetSushiQuery } from '../../redux/sushiApi';

import { ISushi } from '../../models/ISushi';

export const SushiSlider: React.FC = () => {
  const { data = [], isLoading } = useGetSushiQuery(6);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      {data.map((item: ISushi, index: number) => (
        <div key={index}>
          {item.title}
          <img src={item.imageUrl} alt="Sushi" />
        </div>
      ))}
    </div>
  );
};
