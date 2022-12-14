import React from 'react';
import styles from './Pagination.module.scss';

const pageCount = 6;

export const Pagination: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {[...new Array(pageCount)].map((_, i) => (
        <div key={i} className={styles.page}>
          {i + 1}
        </div>
      ))}
    </div> // Пагинация искуственная. Бэкенд не возвращает количество страниц.
  );
};
