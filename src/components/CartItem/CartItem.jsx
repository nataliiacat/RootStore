import React, { useState, useEffect } from 'react'
import './CartItem.css'
import { plantsData } from '../../data'
import { changeQuantity } from '../../stores/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = plantsData.filter((plant) => plant.id === productId)[0];
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1
    }));
  }
  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1
    }));
  }
  return (
    <>
      <div className="item flex">
        <img src={detail.image} />
        <h3 className="subtitle">{detail.name}</h3>
        <div className="price flex">
          <span className="price">{detail.price}$</span>
          {detail.oldPrice && (<span className="price old-price">{detail.oldPrice}$</span>)}
        </div>
        <div className="quantity-controls flex">
          <button onClick={handleMinusQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={handlePlusQuantity}>+</button>
        </div>


      </div>
    </>
  )
}

export default CartItem
