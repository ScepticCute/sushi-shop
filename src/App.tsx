import { Route, Routes } from 'react-router-dom';
import { CartPopup } from './components/CartPopup/CartPopup';
import { Header } from './components/Header/Header';
import { useAppSelector } from './hooks/redux';
import { Cart } from './Pages/Cart/Cart';
import { Contact } from './Pages/Contact/Contact';
import { Home } from './Pages/Home/Home';
import { NotFound } from './Pages/NotFound/NotFound';

function App() {
  const cartPopupIsOpen = useAppSelector((state) => state.cart.isOpen);

  return (
    <div className="App">
      {cartPopupIsOpen ? <CartPopup /> : ''}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
