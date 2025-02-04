import React from 'react'
import './AboutSection.css'

const AboutSection = () => {
  return (
    <>
      <section className="about">
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
    </>
  )
}

export default AboutSection
