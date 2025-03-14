import React, { useEffect } from 'react'
import HomeSection from '../components/HomeSection/HomeSection'
import ProductsSection from '../components/ProductsSection/ProductsSection'
import AboutSection from '../components/AboutSection/AboutSection'
import SaleSection from '../components/SaleSection/SaleSection'
import ReviewsSection from '../components/ReviewsSection/ReviewsSection'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeSection />
      <ProductsSection />
      <AboutSection />
      <SaleSection/>
      <ReviewsSection/>
    </>
  )
}

export default Home
