import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import CartTab from './CartTab/CartTab'
import Footer from './Footer/Footer'


const Layout = () => {
  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
  return (
    <>
      <main>
        <Header scrollToSection={scrollToSection}/>
        <Outlet />
        <Footer/>
      </main>
      <CartTab />
    </>
  )
}

export default Layout
