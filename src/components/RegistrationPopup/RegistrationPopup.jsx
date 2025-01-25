import React from 'react'
import './RegistrationPopup.css'
import { IoPersonOutline } from 'react-icons/io5'

const RegistrationPopup = () => {
  return (
    <>
      <a href="#" className="login-btn" aria-label="Registration">
        <IoPersonOutline className="icon" />
      </a>
    </>
  )
}

export default RegistrationPopup
