import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/product/:id" Component={ProductDetail} />
          <Route path="/cart" Component={Cart} />
          <Route path="/login" Component={Login}/>
          <Route path="/signup" Component={Signup}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;