import React from 'react';
import styles from './NotFoundBlock.module.scss';
import { useNavigate } from 'react-router-dom';

type NotFoundBlockProps = {
  httpError?: number;
  text?: string;
  goHome?: boolean;
};

export const NotFoundBlock: React.FC<NotFoundBlockProps> = ({ httpError, text, goHome }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <span className={styles.emoji}>😞</span>
      {text ? <h1>{text}</h1> : <h1> Увы! Ничего не найдено... </h1>}
      {httpError ? <div> Ошибка {httpError}. </div> : ''}
      {goHome ? (
        <a href="/">
          <button> Вернуться на главную страницу. </button>
        </a>
      ) : (
        <button onClick={() => navigate(-1)}> Вернуться на прошлую страницу. </button>
      )}
    </div>
  );
};
