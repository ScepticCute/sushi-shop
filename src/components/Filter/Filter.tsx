import React from 'react';
import styles from './Filter.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FilterPopup } from '../FilterPopup/FilterPopup';
import { sortType } from '../../models/IFilter';

const sortArray: sortType[] = [
  { name: 'название', sort: 'title' },
  { name: 'цена', sort: 'price' },
  { name: 'популярность', sort: 'rating' },
];
const filterArray = ['все', 'классические', 'запечённые', 'острые'];
const orderArray = ['по убыванию', 'во возрастанию'];

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filter.category);
  const currentSort = useAppSelector((state) => state.filter.sort);

  const [isOpen, setOpen] = React.useState(false);

  const onClickPopupSort = () => {
    setOpen(!isOpen);
  };

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
        <span onClick={onClickPopupSort} className={styles.sort}>
          {currentSort?.name}
        </span>
        {isOpen ? (
          <FilterPopup setOpenPopup={setOpen} orderArray={orderArray} sortArray={sortArray} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
