import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SaleSection.css'
import { plantsData } from '../../data.js'
import StarRating from '../StarRating/StarRating'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../stores/cartSlice'
import { IoIosArrowRoundDown } from 'react-icons/io'
import Slider from 'react-slick'

const SaleSection = () => {
  const carts = useSelector(store => store.cart.items);
  console.log(carts);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAddToCart = (id) => {
    dispatch(addToCart({
      productId: id,
      quantity: 1
    }));
  };
  const salePlants = plantsData.filter((plant) => plant.onSale);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    centerMode: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <>
      <section className="SaleSection" id="SaleSection">
        <div className="container">
          <h1 className="title">
            <IoIosArrowRoundDown className="icon" />Special Offer Products<IoIosArrowRoundDown className="icon" />
          </h1>
          <div className="product-list flex">
            <Slider {...settings}>
              {salePlants.map((plant) => (
                <div className="product-card" key={plant.id}>
                    {plant.onSale && <span className="sale">SALE</span>}
                    <div className="image-container" onClick={() => navigate(`/${plant.slug}`)}>
                      <img src={plant.image} alt={plant.name} 
                       />
                    </div>
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
            </Slider>
          </div>
        </div>
      </section >
    </>
  )
}

export default SaleSection
