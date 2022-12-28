import React from 'react';
import styles from './NotFoundBlock.module.scss';

type NotFoundBlockProps = {
  httpError?: number;
  text?: string;
};

export const NotFoundBlock: React.FC<NotFoundBlockProps> = ({ httpError, text }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.emoji}>😞</span>
      {text ? <h1>{text}</h1> : <h1> Увы! Ничего не найдено... </h1>}
      {httpError ? <div> Ошибка {httpError}. </div> : ''}
      <a href="/">
        <button> Вернуться на главную страницу. </button>
      </a>
    </div>
  );
};
