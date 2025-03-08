import React, { useState, useEffect } from 'react'
import './detail.css'
import StarRating from '../../components/StarRating/StarRating'
import { useParams } from 'react-router-dom'
import { plantsData } from '../../data'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../stores/cartSlice'
import DeliveryPopup from '../../components/DeliveryPopup/DeliveryPopup'
import SaleSection from '../../components/SaleSection/SaleSection'

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = plantsData.filter(plant => plant.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = '/';
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [slug])
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  }
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }));
  }

  return (
    <>
      <div className="detail container flex">
        <div className="img-container">
          {detail.onSale && (<span className="sale">SALE</span>)}
          <img src={detail.image} alt={detail.name} />
        </div>
        <div className="detail-content" key={detail.id}>
          <h1 className="title">{detail.name}</h1>
          <StarRating rating={detail.rating} />
          <div className="price flex">
            <span className="price">{detail.price}$</span>
            {detail.oldPrice && (<span className="price old-price">{detail.oldPrice}$</span>)}
          </div>
          <div className="product-action flex">
            <div className="quantity-controls flex">
              <button onClick={handleMinusQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={handlePlusQuantity}>+</button>
            </div>
            <button className="btn" onClick={handleAddToCart}>Add to cart</button>
          </div>
          <DeliveryPopup />
          <div className="description">
            <p className="text">{detail.description}</p>
            <h3 className="subtitle">Care Instructions</h3>
            <p className="text">{detail.care}</p>
            <h3 className="subtitle">Additional Information</h3>
            <p className="info"><strong className="text">{detail.name}</strong>{' '}{detail.info}</p>
          </div>
        </div>
      </div>
      {<SaleSection/>}
    </>
  )
}

export default Detail