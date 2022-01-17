import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../Assets/images/uwzwcp.jpg";
// import img2 from "../../Assets/images/zwvpsp.jpg";
import img3 from "../../Assets/images/zwcpxy.jpg";
import img4 from "../../Assets/images/zwcpypz.jpg";

export default function GroupSlider() {
  return (
    <div className="group-swiper">
      <div className="silder-title">
        <h2>خدمات توانمند سازی روشا</h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper rosha-swiper"
      >
        <SwiperSlide>
          <div className="inner">
            <img className="img-swiper" src={img3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">
            <img className="img-swiper" src={img3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">
            <img className="img-swiper" src={img3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">
            <img className="img-swiper" src={img3} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
