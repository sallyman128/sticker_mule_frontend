import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  // const cartItems = useSelector(state => state.cart);

  // if (cartItems.length === 0) {
  //   return <div>Your cart is empty.</div>;
  // }

  // const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Your cart</h2>
      {/* {cartItems.map(item => <CartItem key={item.id} item={item} />)} */}
      {/* <div className="cart-total">Total: ${total.toFixed(2)}</div> */}
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
