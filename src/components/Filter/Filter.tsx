import React from 'react';
import styles from './Filter.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IFilter, setFilters } from '../../redux/slices/filterSlice';

const sortArray = ['название', 'популярность', 'цена'];
const filterArray = ['все', 'классические', 'запечённые', 'острые'];
const orderArray = ['по убыванию', 'во возрастанию'];

const dispatch = useAppDispatch();

export const Filter: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false);

  const onClickPopupSort = () => {
    setOpen(!isOpen);
  };

  const onClickFilter = (item: IFilter) => {
    dispatch(setFilters(item));
  };

  const filters = useAppSelector((state) => state.filter.filters);

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
        Фильтрация по:
        <span onClick={() => onClickPopupSort()} className={styles.sort}>
          {sortArray[0]}
        </span>
        {isOpen ? (
          <div className={styles.popup}>
            <ul className={styles.popup_sort_list}>
              {sortArray.map((title, i) => (
                <li key={i} className={styles.popup_sort_item}>
                  {title}
                </li>
              ))}
            </ul>
            <ul className={styles.popup_order_list}>
              {orderArray.map((title, i) => (
                <li key={i} className={styles.popup_order_item}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
