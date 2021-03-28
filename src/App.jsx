import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])

export function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState()
  const slides = []

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={`https://picsum.photos/id/${i}/500/300`}
          alt={`Slide ${i}`}
          className="slideImg"
        />
      </SwiperSlide>
    )
  }

  const thumbs = []

  for (let i = 0; i < 5; i++) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`}>
        <img
          src={`https://picsum.photos/id/${i}/163/100`}
          alt={`Thumbnail ${i}`}
          className="thumbnail"
        />
      </SwiperSlide>
    )
  }

  return (
    <div>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        autoplay
      >
        {slides}
      </Swiper>
      <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={3}
      >
        {thumbs}
      </Swiper>
      <p>Other Content On Page</p>
    </div>
  )
}
