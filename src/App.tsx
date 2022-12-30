import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from './hooks/redux';

import { CartPopup } from './components/CartPopup/CartPopup';
import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import { NotFoundBlock } from './components/NotFoundBlock/NotFoundBlock';
import { About } from './Pages/About/About';
import { CSSTransition } from 'react-transition-group';

import styles from './App.module.scss';

function App() {
  const cartPopupIsOpen = useAppSelector((state) => state.cart.isOpen);

  return (
    <div className="App">
      <CSSTransition
        in={cartPopupIsOpen}
        unmountOnExit
        timeout={300}
        classNames={{
          enterActive: styles.open_cart_enter_active,
          enterDone: styles.open_cart_enter_done,
          exitActive: styles.open_cart_exit_active,
          exitDone: styles.open_cart_exit_done,
        }}>
        <CartPopup />
      </CSSTransition>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundBlock httpError={404} />} />
      </Routes>
    </div>
  );
}

export default App;
