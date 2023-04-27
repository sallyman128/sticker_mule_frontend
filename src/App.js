import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/product/:id" element={ProductDetail} />
          <Route path="/cart" element={Cart} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;