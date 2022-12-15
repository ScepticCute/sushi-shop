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
          <div className={styles.profile}>
            <img src={profileLogo} alt="profile logo" />
          </div>
        ) : (
          <div className={styles.login}>
            <button onClick={(e) => onClickLogin(e)} className={styles.login_button}>
              Войти
            </button>
          </div>
        )}

        <button className={styles.cart_button} onClick={() => dispatch(openCloseCart())}>
          {sushiInCartCount ? `${sushiInCartCount}` : 'Корзина'}
        </button>
      </header>
    </div>
  );
};
