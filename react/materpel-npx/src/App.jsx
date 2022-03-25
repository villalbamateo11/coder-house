import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/cartContext';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer planilla='Planila Blanca' carton='Carton' papel='Papel'/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer carton='Carton' especiales='Carton' papel='Papel'/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/*' element={<Navigate to='/' replace />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;




