import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'
import './ReviewsSection.css'
import { reviewsData } from '../../data'
import StarRating from '../StarRating/StarRating'

const ReviewsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="reviewsSection">
        <div className="container">
          <div className="textDiv">
            <h1 className="title">What People Say</h1>
            <p className="text">Our clients love our service, and we love them back!</p>
            <div className="nav-buttons">
              <button ref={prevRef} className="custom-prev">←</button>
              <button ref={nextRef} className="custom-next">→</button>
            </div>
          </div>
          <div className="slider-block">
            <Swiper
              modules={[Navigation, EffectCreative]}
              slidesPerView={1}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              touchEventsTarget="container"
              simulateTouch={true}
              grabCursor={true}
            >
              {reviewsData.map((review) => (
                <SwiperSlide key={review.id} className="rewiew">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-img"
                  />
                  <h3 className="subtitle">{review.name}</h3>
                  <p className="info">{review.plant}</p>
                  <StarRating rating={review.rating} />
                  <p className="text">{review.review}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewsSection