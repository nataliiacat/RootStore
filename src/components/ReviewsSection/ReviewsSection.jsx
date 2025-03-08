import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './ReviewsSection.css'
import { reviewsData } from '../../data'
import StarRating from '../StarRating/StarRating'
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from 'react-icons/io5'

const ReviewsSection = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current
      swiperRef.current.swiper.navigation.init()
      swiperRef.current.swiper.navigation.update()
    }
  }, [])

  return (
    <>
      <section className="reviewsSection" id="ReviewsSection">
        <div className="container">
          <div className="title-contain">
            <h1 className="title">Reviews</h1>
            <p className="text">Our clients love our service, and we truly value them in return. We’re dedicated to building strong, lasting relationships.</p>
            <div className="nav-buttons">
              <button ref={prevRef} className="custom-prev">
                <IoArrowBackCircleSharp className="icon" />
              </button>
              <button ref={nextRef} className="custom-next">
                <IoArrowForwardCircleSharp className="icon" />
              </button>
            </div>
          </div>
          <div className="slider-block">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            >
              {reviewsData.map((review) => (
                <SwiperSlide key={review.id} className="review">
                  <div className="flex">
                    <img src={review.image} alt={review.name} className="review-img" />
                    <h3 className="subtitle">{review.name}</h3>
                  </div>
                  <p className="text">{review.review}</p>
                  <StarRating className="ratings" rating={review.rating} />
                  <p className="info">{review.plant}</p>
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