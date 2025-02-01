import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './CartTab.css'
import CartItem from '../CartItem/CartItem';
import { toggleStatusTab } from '../../stores/cartSlice';

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <>
      <aside className={`cart-sidebar ${statusTab === false ? "active" : " "}`}
        aria-hidden="true">
        <h3 className="title">Your Shopping Bag</h3>
        <div className="cart-list">
          {carts.map((item, key) =>
            <CartItem key={key} data={item} />
          )}
        </div>
        <div className="button-container flex">
          <button className="close-button" onClick={handleOpenTabCart}>CLOSE</button>
          <button className="checkout-button">CHECKOUT</button>
        </div>
      </aside>

    </>
  )
}

export default CartTab
