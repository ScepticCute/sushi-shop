import React from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux';
import { openCloseCart } from '../../redux/slices/cartSlice';
import { useHowManyItemsInCart } from '../../hooks/useHowManyItemsInCart';

import sushiLogo from '../../assets/img/header/sushi-logo.png';
import styles from './Header.module.scss';
import { FiAlignJustify } from 'react-icons/fi';

import { CSSTransition } from 'react-transition-group';

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

      <CSSTransition
        in={burgerIsOpen}
        timeout={300}
        unmountOnExit
        classNames={{
          enterActive: styles.open_burger_menu_enter_active,
          enterDone: styles.open_burger_menu_enter_done,
          exitActive: styles.open_burger_menu_exit_active,
          exitDone: styles.open_burger_menu_exit,
        }}>
        <div className={styles.open_burger_menu}>
          <nav className={styles.nav}>
            <ul className={styles.nav_list}>
              {routesArray.map((data, i) => (
                <Link to={data.route} key={i}>
                  <li className={styles.nav_list_item} onClick={() => setOpenBurger(false)}>
                    {data.name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </CSSTransition>
    </div>
  );
};
