import styles from './Home.module.scss';

import { Pagination } from '../../components/Pagination/Pagination';
import { SushiBlock } from '../../components/SushiBlock/SushiBlock';
import { SushiSlider } from '../../components/SushiSlider/SushiSlider';

import { ISushi } from '../../models/ISushi';

import Skeleton from './Skeleton';

import { useAppSelector } from '../../hooks/redux';
import { Filter } from '../../components/Filter/Filter';
import { useGetSushiQuery } from '../../redux/sushiApi';
import { NotFoundBlock } from '../../components/NotFoundBlock/NotFoundBlock';

export const Home = () => {
  const filter = useAppSelector((state) => state.filter);

  const { data = [], isFetching } = useGetSushiQuery({ ...filter });

  if (isFetching) {
    return (
      <div className={styles.wrapper}>
        <SushiSlider />
        <div className={styles.content}>
          <Filter />
          <div className={styles.sushi}>
            {[...new Array(8)].map((_, i: number) => (
              <Skeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <SushiSlider />
      <div className={styles.content}>
        <Filter />
        <div className={styles.sushi}>
          {data.length ? (
            data.map((sushi: ISushi, i: number) => <SushiBlock {...sushi} key={Number(i)} />)
          ) : (
            <NotFoundBlock
              text={
                `Суши кончились... Но вы можете нажать кнопку ниже!`
              }
              goHome={true}
            />
          )}
        </div>
        <Pagination />
      </div>
    </div>
  );
};
