import React from 'react';
import styles from './Header.module.scss';
import sushiLogo from '../../assets/img/header/sushi-logo.png';
import { Link } from 'react-router-dom';
import profileLogo from '../../assets/img/header/profile.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { openCloseCart } from '../../redux/slices/cartSlice';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const sushiInCartCount: number = useAppSelector((state) => state.cart.sushi.length);

  const [isLogged, setLogged] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={sushiLogo} className={styles.logo_img} />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <Link to="/">
              <li className={styles.nav_list_item}>Магазин</li>
            </Link>
            <Link to="/about">
              <li className={styles.nav_list_item}>Где мы?</li>
            </Link>
          </ul>
        </nav>

        {isLogged ? (
          <div className={styles.profile}>
            <img src={profileLogo} alt="profile logo" />
          </div>
        ) : (
          <div className={styles.login}></div>
        )}

        <button className={styles.cart_button} onClick={() => dispatch(openCloseCart())}>
          {sushiInCartCount ? `Корзина: ${sushiInCartCount}` : 'Корзина'}
        </button>
      </header>
    </div>
  );
};
