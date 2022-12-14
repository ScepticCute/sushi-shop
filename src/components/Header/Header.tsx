import React from 'react';
import styles from './Header.module.scss';
import sushiLogo from '../../assets/img/header/sushi-logo.png';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isLogged, setLogged] = React.useState(false);

  const onClickLogin: React.MouseEventHandler<HTMLButtonElement> = () => {
    setLogged(!isLogged);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={sushiLogo} className={styles.logo_img} />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <Link to="/">
              <li className={styles.nav_list_item}>Home</li>
            </Link>
            <Link to="/contact">
              <li className={styles.nav_list_item}>Contact</li>
            </Link>
          </ul>
        </nav>

        {isLogged ? (
          <div className={styles.profile}></div>
        ) : (
          <div className={styles.login}>
            <button onClick={(e) => onClickLogin(e)} className={styles.login_button}>
              Войти
            </button>
          </div>
        )}

        <button className={styles.cart_button}>{0 ? 'Колво товаров' : 'Корзина'}</button>
      </header>
    </div>
  );
};
