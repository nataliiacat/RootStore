import React from 'react'
import './AboutSection.css'
import packing from '../../assets/images/packing.jpg'
import delivery from '../../assets/images/delivery.jpg'
import unboxing from '../../assets/images/unboxing.jpg'

const AboutSection = () => {
  return (
    <>
      <section className="about" id="AboutSection">
        <div className="container">
          <div className="about__inner">
            <h2 className="title">Our Root Store:<br /> Your Grean Space</h2>
            <div className="abouy__text">
              <p className="text">At Root Store, we’re not just a plant shop – we’re your green sanctuary. Imagine a cozy, lush space where you can explore our curated selection of beautiful ficuses and kokedama, each one waiting to add charm and personality to your home. Whether you’re a seasoned plant lover looking for a special addition or a beginner eager to nurture your green thumb, we have just the plants for you.
              </p>
              <p className="text">But we don’t stop at plants. Our experts have handpicked the finest pots, tools, and plant care essentials to help you nurture your new green friends. We’re constantly updating our range, so you’ll always find the latest and best products to support your plant journey. Root Store is here to make sure you have everything you need to grow into a true plant enthusiast.</p>
              <button className="btn discover-btn"> LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>
      <section className="journey">
        <div className="container">
          <div className="journey-item flex">
            <div className="journey-content">
              <h3 className="subtitle">01. Carefully Packed</h3>
              <p className="text">Each plant is hand-selected and securely packed in eco-friendly packaging to ensure it arrives in perfect condition.</p>
            </div>
            <div className="journey-img packing-img">
              <img src={packing} alt="image packing" />
            </div>
          </div>
          <div className="journey-item flex">
            <div className="journey-img">
              <img src={delivery} alt="image delivery" />
            </div>
            <div className="journey-content">
              <h3 className="subtitle">02. Fast & Safe Shipping</h3>
              <p className="text">We ship your plant as soon as possible, using reliable carriers to ensure a smooth and timely delivery.</p>
            </div>
          </div>
          <div className="journey-item flex">
            <div className="journey-content">
              <h3 className="subtitle">03. Unboxing & Thriving</h3>
              <p className="text">Unpack your new green friend, follow our care guide, and enjoy the beauty it brings to your space!</p>
            </div>
            <div className="journey-img">
              <img src={unboxing} alt="image unboxing" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
