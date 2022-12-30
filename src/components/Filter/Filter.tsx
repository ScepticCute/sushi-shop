import React from 'react';
import styles from './Filter.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FilterPopup } from '../FilterPopup/FilterPopup';
import { setCategory, setPage } from '../../redux/slices/filterSlice';

import { sortType } from '../../models/IFilter';
import { CSSTransition } from 'react-transition-group';

const sortArray: sortType[] = [
  { name: 'название', sort: 'title' },
  { name: 'цена', sort: 'price' },
  { name: 'популярность', sort: 'rating' },
];
const filterArray = ['острое', 'рыба', 'курица', 'морепродукты', 'креветка', 'свинина'];
const orderArray = ['по убыванию', 'во возрастанию'];

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((state) => state.filter.sort);
  const currentCategory = useAppSelector((state) => state.filter.category);

  const [isOpen, setOpen] = React.useState(false);

  const onClickPopupSort = () => {
    setOpen(!isOpen);
  };

  const onClickCategory = (category: string) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
    window.scroll(0, 0);
  };

  return (
    <div className={styles.filter_wrapper}>
      <span className={styles.title}> Все категории: </span>
      <div className={styles.filters}>
        {filterArray.map((title, i) => (
          <div
            key={i}
            onClick={() => onClickCategory(title)}
            className={currentCategory === title ? styles.filter_active : styles.filter}>
            {title}
          </div>
        ))}
      </div>
      <div className={styles.sort_wrapper}>
        <span onClick={onClickPopupSort} className={styles.sort}>
          {currentSort?.name}
        </span>
        <CSSTransition
          in={isOpen}
          unmountOnExit
          timeout={300}
          classNames={{
            exitActive: styles.open_filter_exit_active,
            exitDone: styles.open_filter_exit_done,
          }}>
          <FilterPopup setOpenPopup={setOpen} orderArray={orderArray} sortArray={sortArray} />
        </CSSTransition>
      </div>
    </div>
  );
};
