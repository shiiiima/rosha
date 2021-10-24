import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

// Import Swiper styles
// import 'swiper/css/swiper.css'
// import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"

import "./Slider.css";
import img1 from "../../Assets/images/quz.jpg";
import img2 from "../../Assets/images/imgslider1.jpg";
import img3 from "../../Assets/images/imgSlider2.jpeg";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { textAlign } from "@mui/system";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper first-slider"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
