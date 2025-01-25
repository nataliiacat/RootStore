import React from 'react'
import './Cart.css'
import { BsCart4 } from 'react-icons/bs'

const Cart = () => {
  return (
    <>
      <div className="cart">
        <a href="#" className="cart-btn" aria-label="Cart">
          <BsCart4 className="icon" /><span className="cart-count">0</span>
        </a>
        
      </div>
    </>
  )
}

export default Cart
