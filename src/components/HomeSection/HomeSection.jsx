import React from 'react'
import './HomeSection.css'
import homeimg from '../../assets/images/home.png'
import { useSpring, animated } from 'react-spring'

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((val) => val.toFixed(0))}</animated.div>;
}

const HomeSection = () => {
  return (
    <>
      <section className="HomeSection" id="homeSection">
        <div className="container">
          <div className="home-content flex">
            <div className="content-img">
              <img src={homeimg} alt="home image" />
            </div>
            <div className="content-text flex">
              <h1 className="title">
                Easy Plant Shopping <br /> with Root Store!
              </h1>
              <p className="text">With Root Store, order your favorite plants online and enjoy exclusive discounts.
                Plus, you can get free consultations from our plant experts right on the website.</p>
              <div className="btn-content flex">
                <button className="btn discover-btn">DISCOVER MORE</button>
                <button className="btn">SHOP NOW</button>
              </div>
              <div className="stats flex">
                <div className="stat-item flex">
                  <div className="flex">
                    <Number n={128} />+</div>
                  <span> sold Ficus</span>
                </div>
                <div className="stat-item  flex">
                  <div className="flex">
                    <Number n={76} />+</div>
                  <span> sold Kokedama</span>
                </div>
                <div className="stat-item flex">
                  <div className="flex">
                    <Number n={154} />+</div>
                  <span> happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSection
