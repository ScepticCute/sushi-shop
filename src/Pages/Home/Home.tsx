import { useEffect } from 'react';
import styles from './Home.module.scss';

import { Pagination } from '../../components/Pagination/Pagination';
import { SushiBlock } from '../../components/SushiBlock/SushiBlock';
import { SushiSlider } from '../../components/SushiSlider/SushiSlider';

import { ISushi } from '../../models/ISushi';

import { useAppSelector } from '../../hooks/redux';
import { Filter } from '../../components/Filter/Filter';
import { useGetSushiQuery } from '../../redux/sushiApi';

export const Home = () => {
  const filter = useAppSelector((state) => state.filter);

  const { data = [], isLoading } = useGetSushiQuery({ ...filter });

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
