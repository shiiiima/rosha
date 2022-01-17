
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles






// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function SliderAboutUs() {
  
  
  
  return (
    <>
    <Swiper slidesPerView={1} spaceBetween={10} pagination={{
  "clickable": true
}} breakpoints={{
  "@0.00": {
    "slidesPerView": 1,
    "spaceBetween": 10
  },
  "@0.75": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "@1.00": {
    "slidesPerView": 3,
    "spaceBetween": 40
  },
  // "@1.50": {
  //   "slidesPerView": 4,
  //   "spaceBetween": 50
  // }
}} className="mySwiper" id="about-us-slider">
  <SwiperSlide> <div className="slider-card-aboutus"><p> یشتری را برای طراحان رایایشتری را برای طراحان رایانامفهوم شناخت بیشتری را برای طراحان رایان</p></div></SwiperSlide><SwiperSlide><div className="slider-card-aboutus"><p> یشتری را برای طراحان رایایشتری را برای طراحان رایانامفهوم شناخت بیشتری را برای طراحان رایان</p></div></SwiperSlide><SwiperSlide><div className="slider-card-aboutus"><p> یشتری را برای طراحان رایایشتری را برای طراحان رایانامفهوم شناخت بیشتری را برای طراحان رایان</p></div></SwiperSlide><SwiperSlide><div className="slider-card-aboutus"><p> یشتری را برای طراحان رایایشتری را برای طراحان رایانامفهوم شناخت بیشتری را برای طراحان رایان</p></div></SwiperSlide><SwiperSlide><div className="slider-card-aboutus"><p> یشتری را برای طراحان رایایشتری را برای طراحان رایانامفهوم شناخت بیشتری را برای طراحان رایان</p></div></SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    </>
  )
}