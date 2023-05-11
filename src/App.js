import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/navigation';
import Home from './components/home';
import Products from './components/products';
import ErrorPage from './components/error';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
