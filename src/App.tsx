import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Cart } from './Pages/Cart/Cart';
import { Contact } from './Pages/Contact/Contact';
import { Home } from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
