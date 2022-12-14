import { useState } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { Pagination } from '../../components/Pagination/Pagination';
import { SushiBlock } from '../../components/SushiBlock/SushiBlock';
import { SushiSlider } from '../../components/SushiSlider/SushiSlider';
import { ISushi } from '../../models/ISushi';
import { sushiApi, useGetSushiQuery } from '../../redux/sushiApi';
import styles from './Home.module.scss';

export const Home = () => {
  const { data = [], isLoading } = useGetSushiQuery({ limit: 12 });

  if (isLoading) return <h1> Loading... </h1>;

  return (
    <div className={styles.wrapper}>
      <SushiSlider />
      <div className={styles.content}>
        <Filter />
        <div className={styles.sushi}>
          {data.map((sushi: ISushi, i: number) => (
            <SushiBlock {...sushi} key={i} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
};
