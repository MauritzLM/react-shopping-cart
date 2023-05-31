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
import Checkout from './components/checkout';
import Confirmed from './components/purchaseConfirmed';
import { inventory } from './inventory';
import { v4 as uuidv4 } from "uuid";

const emptyCart = [];

function App() {
  const [cart, setCart] = useState(emptyCart);

  // handle cart add
  function handleCartAdd(category, itemid, numberOfItems) {
    // find product in inventory
    let result = inventory[category].find(({ id }) => id === itemid);

    let items = []
    for (let i = 0; i < numberOfItems; i++) {
      // create new cart item(instance) for each item
      let cartItem = { ...result, instanceId: uuidv4() };
      items.push(cartItem);
    }

    setCart([...cart, ...items]);
  }

  // handle cart remove
  function handleCartRemove(instanceId) {
    setCart(cart.filter(item => item.instanceId !== instanceId));
  }

  // handle confirmed purchase
  function handleConfirmedPayment() {
    setCart(emptyCart);
  }

  return (
    <div className="App">
      <Header cart={cart} />
      <main>
        <Routes>
          <Route path="/react-shopping-cart" element={<Home />} />
          <Route path='/shopping-cart' element={<ShoppingCart cart={cart} handleCartRemove={handleCartRemove} handleConfirmedPayment={handleConfirmedPayment} />} />
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
