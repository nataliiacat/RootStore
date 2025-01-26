import React, { useState } from 'react'
import './RegistrationPopup.css'
import { IoPersonOutline } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'
import { IoLogoGoogle, IoLogoApple } from 'react-icons/io'

const RegistrationPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <a href="#" className="login-btn" aria-label="Registration" onClick={togglePopup}>
        <IoPersonOutline className="icon" />
      </a>
      {isPopupOpen && (
        <div className="popup-overlay flex">
          <div className="popup-content">
            <button className="close-btn" onClick={togglePopup}>
              <AiOutlineClose className="icon" />
            </button>
            {isLogin ? (
              <div className="login-form popup-form">
                <h2 className="title">LOGIN</h2>
                <form className="flex form">
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <a href="#" className="page-link-label">Forgot Password?</a>
                </form>
                <button className="btn" type="submit">Log In</button>
                <p className="text">
                  Don't have an account?{" "}
                  <span onClick={toggleForm} className="toggle-link">
                    Sign Up
                  </span>
                </p>
                <div className="buttons-container">
                  <div className="apple-login-button flex">
                    <IoLogoApple className="icon apple-icon" />
                    <span className="text">Log in with Apple</span>
                  </div>
                  <div className="google-login-button flex">
                    <IoLogoGoogle className="icon google-gradient" />
                    <span className="text">Log in with Google</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="signup-form popup-form">
                <h2 className="title">SIGN UP</h2>
                <form className="flex form">
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                </form>
                <button className="btn" type="submit">SIGN UP</button>
                <p className="text">
                  Already have an account?{" "}
                  <span onClick={toggleForm} className="toggle-link">
                    Log In
                  </span>
                </p>
                <div className="buttons-container">
                  <div className="apple-login-button flex">
                    <IoLogoApple className="icon apple-icon" />
                    <span className="text">Log in with Apple</span>
                  </div>
                  <div className="google-login-button flex">
                    <IoLogoGoogle className="icon google-gradient" />
                    <span className="text">Log in with Google</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default RegistrationPopup
