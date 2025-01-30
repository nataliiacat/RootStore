import React, {useState} from 'react'
import { CiPaperplane } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import './DeliveryPopup.css'

const DeliveryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>  
    <button className="popup-button" onClick={() => setIsOpen(true)}>
      <p className="info flex"><CiPaperplane />Delivery & Returns</p>
      </button>
      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup-content delivery" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setIsOpen(false)}>
              <AiOutlineClose className="icon" />
            </span>
            <h1 className="subtitle">Delivery & Return Information<br/>Root Store</h1>
            <h3 className="text">Standard Delivery</h3>
            <p className="info">
              We process orders within <strong>1-2 business days</strong>.
              Standard delivery takes <strong>3-7 business days</strong> depending on your location.
              Flat rate shipping: <strong>$7.99</strong> worldwide.
            </p>

            <h3 className="text">Express Delivery</h3>
            <p className="info">
              Need it faster? Choose express delivery for <strong>$15.99</strong>.
              Estimated delivery time: <strong>1-3 business days</strong>.
            </p>

            <h3 className="text">Free Shipping</h3>
            <p className="info">
              Enjoy <strong>free shipping</strong> on all orders over <strong>$100</strong>.
            </p>

            <h3 className="text">Local Pickup</h3>
            <p className="info">
              Pick up your order for free at our store:
              <strong>123 Green Street, New York, USA</strong>.
              You'll receive an email once your order is ready for pickup.
            </p>

            <h3 className="text">Parcel Lockers</h3>
            <p className="info">
              Available in select areas. Use at your own risk during extreme weather conditions.
              We are not responsible for damage caused by improper storage.
            </p>

            <hr />

            <h3 className="text">Return Policy</h3>
            <p className="info">
              Returns are accepted within <strong>14 days</strong> of receiving your order.
              Items must be in original condition.
              Return shipping costs are the customer’s responsibility unless the product is defective.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default DeliveryPopup
