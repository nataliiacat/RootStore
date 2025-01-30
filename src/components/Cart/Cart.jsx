import React, { useState, useEffect } from 'react'
import './Cart.css'
import { BsCart4 } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Cart = () => {
  const [ totalQuantity, setTotalQuantity ] = useState(0);
  const carts =useSelector(store=>store.cart.items);
  useEffect(()=>{
let total=0;
carts.forEach(item => total+=item.quantity);
setTotalQuantity(total);
  },[carts]);
  return (
    <>
      <div className="cart">
        <a href="#" className="cart-btn" aria-label="Cart">
          <BsCart4 className="icon" /><span className="cart-count">{totalQuantity}
          </span>
        </a>
      </div>
    </>
  )
}

export default Cart
