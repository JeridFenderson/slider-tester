import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Thumbs])

export function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState()
  const slides = []

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img src={`https://picsum.photos/id/${i}/500/300`} alt={`Slide ${i}`} />
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
    </div>
  )
}
