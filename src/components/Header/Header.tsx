import React from 'react';
import styles from './Header.module.scss';
import sushiLogo from '../../assets/img/header/sushi-logo.png';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { openCloseCart } from '../../redux/slices/cartSlice';
import { FiAlignJustify } from 'react-icons/fi';
import { useHowManyItemsInCart } from '../../hooks/useHowManyItemsInCart';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const sushiInCartCount: number = useHowManyItemsInCart();

  const [burgerIsOpen, setOpenBurger] = React.useState(false);

  const onClickBurger = () => {
    setOpenBurger(!burgerIsOpen);
  };

  const routesArray = [
    { route: '/', name: 'Магазин' },
    { route: '/about', name: 'Где мы?' },
    { route: '/', name: 'Пустышка' },
    { route: '/', name: 'Пустышка' },
    { route: '/', name: 'Пустышка' },
  ];

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={sushiLogo} className={styles.logo_img} />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {routesArray.map((data, i) => (
              <Link to={data.route} key={i}>
                <li className={styles.nav_list_item}>{data.name}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <div></div>
      </header>

      <button className={styles.cart_button} onClick={() => dispatch(openCloseCart())}>
        {sushiInCartCount ? (
          <>
            <span className={styles.cart_text}> Корзина:</span> {sushiInCartCount}
          </>
        ) : (
          'Корзина'
        )}
      </button>

      {/* Бургер */}
      <div className={styles.burger} onClick={onClickBurger}>
        <FiAlignJustify />
      </div>

      {burgerIsOpen ? (
        <div className={styles.open_burger_menu}>
          <nav className={styles.nav}>
            <ul className={styles.nav_list}>
              {routesArray.map((data, i) => (
                <Link to={data.route} key={i}>
                  <li className={styles.nav_list_item}>{data.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
