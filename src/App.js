import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Products from './components/productCategory';
import ErrorPage from './components/error';
import ProductCard from './components/productCard';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=':id' element={<ProductCard />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
