import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { AiOutlineGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container flex">
          <div className="footerInner">
            <Link className="logo-link" to='/'><h2 className="logo logo-footer">Root store</h2></Link>
            <p className="info">©2025 - RootStore.com </p>
          </div>
          <div className="footerInner flex">
            <div className="footerItem">
              <h4 className="subtitle">Menu</h4>
              <ul>
                <li><a className="text" href="#">Home</a></li>
                <li><a className="text" href="#">About</a></li>
                <li><a className="text" href="#">Products</a></li>
                <li><a className="text" href="#">Reviews</a></li>
              </ul>
            </div>
            <div className="footerItem">
              <h4 className="subtitle">Information</h4>
              <ul>
                <li><a className="text" href="#">Destinations</a></li>
                <li><a className="text" href="#">Supports</a></li>
                <li><a className="text" href="#">Terms & Conditions</a></li>
                <li><a className="text" href="#">Privacy</a></li>
              </ul>
            </div>
            <div className="footerItem">
              <h4 className="subtitle">Contact Info</h4>
              <ul>
                <li>
                  <a className="text" href="tel:+420720579646">+420 72 057 9646</a>
                </li>
                <li>
                  <a className="text" href="mailto:info@rootstore.com">info@rootstore.com</a>
                </li>
                <li className="text">
                  Republic Square 10, 110 00
                </li>
              </ul>
            </div>
          </div>

          <div className="footerInner">
            <h4 className="subtitle follow">Follow us</h4>
            <ul className="social-link flex">
              <li><a href="#"><AiOutlineGithub className="icon" /></a></li>
              <li><a href="#"><AiFillLinkedin className="icon" /></a></li>
              <li><a href="#"><AiFillFacebook className="icon" /></a></li>
              <li><a href="#"><AiFillInstagram className="icon" /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
