import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup'
import Cart from '../Cart/Cart'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNavbar = () => {
    setActive('navBar')
  }
  const handleLogoClick = () => {
    scrollToTop()
  }
  const handleHomeClick = () => {
    if (location.pathname === '/RootStore/') {
      scrollToTop()
    } else {
      window.history.pushState({}, '', '/RootStore/')
      scrollToTop()
    }
    removeNavbar()
  }
  return (
    <>
      <header className="header">
        <div className="container flex">
          <Link className="logo-link" to='/RootStore/' onClick={handleLogoClick}>
            <h2 className="logo">Root store</h2>
          </Link>
          <nav className={active}>
            <ul className="navList flex">
              <li className="navItem">
                <Link className="navLink subtitle" to="/RootStore/" onClick={handleHomeClick}>HOME</Link>
              </li>
              <li className="navItem">
                <ScrollLink className="navLink subtitle" to="ProductsSection" smooth={true} duration={1000} onClick={removeNavbar}>PRODUCTS</ScrollLink>
              </li>
              <li className="navItem">
                <ScrollLink className="navLink subtitle" to="AboutSection" smooth={true} duration={1000} onClick={removeNavbar}>ABOUT</ScrollLink>
              </li>
              <li className="navItem navSale">
                <ScrollLink className="navLink subtitle" to="SaleSection" smooth={true} duration={1000} onClick={removeNavbar}>SALE</ScrollLink>
              </li>
              <li className="navItem">
                <ScrollLink className="navLink subtitle" to="ReviewsSection" smooth={true} duration={1000} onClick={removeNavbar}>REVIEWS</ScrollLink>
              </li>
            </ul>
            <div onClick={removeNavbar} className="closeNavbar">
              <AiOutlineClose className="icon" />
            </div>
          </nav>
          <div onClick={showNav} className="toggleNavbar">
            <AiOutlineMenu className="icon" />
          </div>
          <div className="header-actions flex">
            <RegistrationPopup />
            <Cart />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
