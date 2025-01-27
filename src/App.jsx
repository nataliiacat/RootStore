import React from 'react'
import './assets/styles/global.css'
import Header from './components/Header/Header'
import ProductsSection from './components/ProductsSection/ProductsSection';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function App() {
  return (
    <> 
      <Header scrollToSection={scrollToSection} />
      <ProductsSection/>
    </>
  )
}

export default App
