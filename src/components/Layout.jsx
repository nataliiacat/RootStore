import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import CartTab from './CartTab/CartTab'
import Footer from './Footer/Footer'
import { scroller } from 'react-scroll'

const Layout = () => {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <main>
        <Header scrollToSection={scrollToSection} scrollToTop={scrollToTop} />
        <Outlet />
        <Footer/>
      </main>
      <CartTab />
    </>
  )
}

export default Layout
