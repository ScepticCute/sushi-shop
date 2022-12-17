import React from 'react';
import styles from './FilterPopup.module.scss';

import { useAppDispatch } from '../../hooks/redux';
import { setOrder, setPage, setSort } from '../../redux/slices/filterSlice';
import { sortType } from '../../models/IFilter';

type IFilterPopupProps = {
  orderArray: string[];
  sortArray: sortType[];
  setOpenPopup: (arg: boolean) => void;
};

export const FilterPopup: React.FC<IFilterPopupProps> = ({
  orderArray,
  sortArray,
  setOpenPopup,
}) => {
  const dispatch = useAppDispatch();

  const onClickSort = (sort: sortType): void => {
    dispatch(setSort(sort));
    setOpenPopup(false);
    dispatch(setPage(1));
  };

  const onClickOrder = (order: string): void => {
    if (order.includes('по убыванию')) {
      dispatch(setOrder('desc'));
      setOpenPopup(false);
      dispatch(setPage(1));
    } else {
      dispatch(setOrder('asc'));
      setOpenPopup(false);
      dispatch(setPage(1));
    }
  };

  return (
    <div className={styles.popup}>
      <ul className={styles.popup_sort_list}>
        {sortArray.map((sort, i) => (
          <li onClick={() => onClickSort(sort)} key={i} className={styles.popup_sort_item}>
            {sort.name}
          </li>
        ))}
      </ul>
      <ul className={styles.popup_order_list}>
        {orderArray.map((title, i) => (
          <li onClick={() => onClickOrder(title)} key={i} className={styles.popup_order_item}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
