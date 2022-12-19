import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from './hooks/redux';

import { CartPopup } from './components/CartPopup/CartPopup';
import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import { NotFoundBlock } from './components/NotFoundBlock/NotFoundBlock';

function App() {
  const cartPopupIsOpen = useAppSelector((state) => state.cart.isOpen);

  return (
    <div className="App">
      {cartPopupIsOpen ? <CartPopup /> : ''}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundBlock httpError={404} />} />
      </Routes>
    </div>
  );
}

export default App;
