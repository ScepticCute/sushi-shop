import React from 'react';
import styles from './Filter.module.scss';

const sortArray = ['название', 'популярность', 'цена'];
const filterArray = ['все', 'классические', 'запечённые', 'острые'];

export const Filter: React.FC = () => {
  return (
    <div className={styles.filter_wrapper}>
      <h2> Все суши: </h2>
      <div className={styles.filters}>
        {filterArray.map((title, i) => (
          <div key={i} className={styles.filter}>
            {title}
          </div>
        ))}
      </div>
      <div className={styles.sort_wrapper}>
        Фильтрация по: <span className={styles.sort}>{sortArray[0]}</span>
      </div>
    </div>
  );
};
