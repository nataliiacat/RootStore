import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup'
import Cart from '../Cart/Cart'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Header = ({ scrollToSection }) => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNavbar = () => {
    setActive('navBar')
  }
  return (
    <>
      <header className="header">
        <div className="container flex">
          <Link className="logo-link" to='/'><h2 className="logo">Root store</h2></Link>
          <nav className={active}>
            <ul className="navList flex">
              <li className="navItem">
                <a className="navLink subtitle" href="#HomeSection" onClick={() => {
                  removeNavbar();
                  scrollToSection('HomeSection')
                }}>HOME</a>
              </li>
              <li className="navItem">
                <a className="navLink subtitle" href="#AboutSection" onClick={() => {
                  removeNavbar();
                  scrollToSection('AboutSection')
                }}>ABOUT</a>
              </li>
              <li className="navItem">
                <a className="navLink subtitle" href="#ProductsSection" onClick={() => {
                  removeNavbar();
                  scrollToSection('ProductsSection')
                }}>PRODUCTS</a>
              </li>
              <li className="navItem">
                <a className="navLink subtitle" href="#RecommendSection" onClick={() => {
                  removeNavbar();
                  scrollToSection('RecommendSection')
                }}>RECOMMEND</a>
              </li>
              <li className="navItem">
                <a className="navLink subtitle" href="#ReviewsSection" onClick={() => {
                  removeNavbar();
                  scrollToSection('ReviewsSection')
                }}>REVIEWS</a>
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
