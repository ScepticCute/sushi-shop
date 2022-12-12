import { useState } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';
import { SushiBlock } from '../../components/SushiBlock/SushiBlock';
import { SushiSlider } from '../../components/SushiSlider/SushiSlider';
import { useGetSushiQuery } from '../../redux/sushiApi';
import styles from './Home.module.scss';

export const Home = () => {
  // const [sushi, setSushi] = React.useState<null | void>([]);

  const { data = [], isLoading } = useGetSushiQuery(12);

  const sortArray = ['название', 'популярность', 'цена'];
  const filterArray = ['все', 'классические', 'запечённые', 'острые'];
  const [activeFilters, setActiveFilters] = useState([]);

  if (isLoading) return <h1> Loading... </h1>;

  return (
    <div className={styles.wrapper}>
      <SushiSlider />
      <div className={styles.content}>
        <div className={styles.filter_wrapper}>
          <h2> Все суши: </h2>
          {}
          <div className={styles.filters}>
            {filterArray.map((title, i) => (
              <div key={i} className={styles.filter}>
                {title}
              </div>
            ))}
          </div>
          <div>
            Фильтрация по: <span className={styles.sort}>{sortArray[0]}</span>
          </div>
        </div>
        <div className={styles.sushi}>
          {data.map((sushi: any, i: number) => (
            <SushiBlock {...sushi} key={i} />
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
};
