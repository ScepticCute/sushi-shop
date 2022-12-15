import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

type notFoundBlockProps = {
  httpError: number;
};

export const NotFoundBlock: React.FC<notFoundBlockProps> = ({ httpError }) => {
  return (
    <div className={styles.root}>
      <span>😞</span>
      <h1> Увы! Ничего не найдено... </h1>
      {httpError ? <div> Ошибка {httpError}. </div> : <div> Ошибка... Неизвестна. </div>}
      <Link to="/">
        <button> Вернуться на главную страницу. </button>
      </Link>
    </div>
  );
};
