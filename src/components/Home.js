import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.stickermule.com/products')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Stickermule!</h1>
      <div className="product-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default Home;
