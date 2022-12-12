import React from 'react';
import styles from './Header.module.scss';
import sushiLogo from '../../assets/img/header/sushi-logo.png';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isLogged, setLogged] = React.useState(false);

  const onClickLogin = () => {
    setLogged(!isLogged);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <img src={sushiLogo} className={styles.logo_img} />
        </a>

        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_list_item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link to="/news">News</Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {isLogged ? (
          <div className={styles.profile}></div>
        ) : (
          <div className={styles.login}>
            <button onClick={() => onClickLogin()} className={styles.login_button}>
              Войти
            </button>
          </div>
        )}

        <button className={styles.cart_button}>{0 ? 'Колво товаров' : 'Корзина'}</button>
      </header>
    </div>
  );
};
