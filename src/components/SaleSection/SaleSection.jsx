import React from 'react'
import './SaleSection.css'
import { Link } from 'react-router-dom'
import { plantsData } from '../../data.js'
import StarRating from '../StarRating/StarRating'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../stores/cartSlice'

const SaleSection = () => {
  const carts = useSelector(store => store.cart.items);
  console.log(carts);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart({
      productId: id,
      quantity: 1
    }));
  };
  const salePlants = plantsData.filter((plant) => plant.onSale);
  return (
    <>
      <section className="SaleSection">
        <div className="container">
          <h1 className="title">Spicial Offer Products</h1>
          <div className="product-list flex">
            {salePlants.map((plant) => (
              <div className="product-card" key={plant.id}>
                <Link to={plant.slug}>
                  {plant.onSale && <span className="sale">SALE</span>}
                  <div className="image-container">
                    <img src={plant.image} alt={plant.name} />
                  </div>
                </Link>
                <h3 className="subtitle">{plant.name}</h3>
                <StarRating rating={plant.rating} />
                <div className="price flex">
                  <span className="price">{plant.price}$</span>
                  {plant.oldPrice && (
                    <span className="price old-price">{plant.oldPrice}$</span>
                  )}
                </div>
                <button className="btn" onClick={() => handleAddToCart(plant.id)}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SaleSection
