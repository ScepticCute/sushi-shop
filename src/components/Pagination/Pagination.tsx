import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPage } from '../../redux/slices/filterSlice';
import styles from './Pagination.module.scss';

const pageCount = 5;

type PaginationPropsType = {};

export const Pagination: React.FC<PaginationPropsType> = ({}) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.filter.page);

  const onClickPage = (page: number) => {
    dispatch(setPage(page));
    window.scroll(0, 0);
  };

  return (
    <div className={styles.wrapper}>
      {[...new Array(pageCount)].map((_, i) => (
        <div
          key={i}
          onClick={() => {
            onClickPage(i + 1);
          }}
          className={currentPage === i + 1 ? styles.page_active : styles.page}>
          {i + 1}
        </div>
      ))}
    </div> // Пагинация искуственная. mockapi не возвращает количество страниц.
  );
};
