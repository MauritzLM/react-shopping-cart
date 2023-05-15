import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Products from './components/productCategory';
import ErrorPage from './components/error';
import ProductCard from './components/productCard';
import ShoppingCart from './components/cart';
import { inventory } from './inventory';
import { v4 as uuidv4 } from "uuid";

// implement cart state*
function App() {
  const [cart, setCart] = useState([]);

  // handle cart add
  function handleCartAdd(category, itemid) {
    // find item in category arr
    const result = inventory[category].find(({ id }) => id === itemid);
    result.instanceId = uuidv4();

    setCart([...cart, result]);
  }

  // handle cart remove 
  function handleCartRemove(instanceId) {
    setCart(cart.filter(item => item.instanceId !== instanceId))
  }

  return (
    <div className="App">
      <Header cart={cart} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/shopping-cart' element={<ShoppingCart cart={cart} handleCartRemove={handleCartRemove} />} />
          <Route path="/products">
            <Route index element={<Products cart={cart} handleCartAdd={handleCartAdd} />} />
            <Route path=':id' element={<ProductCard />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
