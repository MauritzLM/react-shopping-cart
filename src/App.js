import React from 'react';
import { useState } from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Products from './components/productCategory';
import ErrorPage from './components/error';
import ProductCard from './components/productCard';
import ShoppingCart from './components/cart';
import { inventory } from './inventory';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // handle cart add
  function handleCartAdd(category, itemid) {
    // find product
    let result = inventory[category].find(({ id }) => id === itemid);

    // create new cart item(instance)
    let cartItem = { ...result, instanceId: uuidv4() };

    setCart([...cart, cartItem]);

    setTotal(cart.reduce((accumulator, currentValue) =>
      accumulator + Number(currentValue.price), Number(result.price)))
  }

  // handle cart remove* 
  function handleCartRemove(instanceId) {
    setCart(cart.filter(item => item.instanceId !== instanceId));

    setTotal(cart.reduce((accumulator, currentValue) =>
      accumulator + Number(currentValue.price), 0))

  }

  // function calculateTotalPrice() {
  //   setTotal(cart.reduce((accumulator, currentValue) =>
  //     accumulator + Number(currentValue.price), 0))
  // }

  return (
    <div className="App">
      <Header cart={cart} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/shopping-cart' element={<ShoppingCart cart={cart} handleCartRemove={handleCartRemove} total={total} />} />
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
