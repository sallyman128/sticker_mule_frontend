import React from 'react';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.image_url} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;