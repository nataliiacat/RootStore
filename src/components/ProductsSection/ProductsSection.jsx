import React, { useState, useEffect } from 'react'
import './ProductsSection.css'
import { plantsData } from '../../data.js'
import StarRating from '../StarRating/StarRating'


const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredPlants = plantsData.filter((plant) => {
    if (activeCategory === 'all') return true;
    return plant.category === activeCategory;
  });

  useEffect(() => {
    const button = document.querySelectorAll('.category-btn');
    button.forEach(button => {
      if (button.dataset.category === activeCategory) {
        button.classList.add('active');
      } else {
        button.classList.remove('active')
      }
    });
  }, [activeCategory]);
  return (
    <>
      <section className="ProductsSection">
        <div className="container">
          <h1 className="title">Our Product Range</h1>
          <div className="category-filter flex">
            <button data-category="all" className="subtitle category-btn" onClick={() => handleCategoryChange('all')}>All</button>
            <button data-category="Ficuses" className="subtitle category-btn" onClick={() => handleCategoryChange('Ficuses')}>Ficuses</button>
            <button data-category="Kokedama" className="subtitle category-btn" onClick={() => handleCategoryChange('Kokedama')}>Kokedama</button>
          </div>
          <div className="product-list flex">
            {filteredPlants.map((plant) => (
              <div className="product-card" key={plant.id}>
                {plant.onSale && (<span className="sale">SALE</span>)}
                <div className="image-container">
                  <img src={plant.image} alt={plant.name} />
                  </div>
                <h3 className="subtitle">{plant.name}</h3>
                <StarRating rating={plant.rating} />
                <div className="price flex">
                  <span className="price">{plant.price}$</span>
                  {plant.oldPrice && (<span className="price old-price">{plant.oldPrice}$</span>)}</div>
                <button className="btn">Add to cart</button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default ProductsSection
