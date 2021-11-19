// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from "../../Assets/images/uwzwcp.jpg";
// // import img2 from "../../Assets/images/zwvpsp.jpg";
// import img3 from "../../Assets/images/zwcpxy.jpg";
// import img4 from "../../Assets/images/zwcpypz.jpg";
// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/pagination"
// // import "swiper/css/navigation"

// import "./group-slider.css";

// // import Swiper core and required modules
// import SwiperCore, { Pagination, Navigation } from "swiper";

// // install Swiper modules
// SwiperCore.use([Pagination, Navigation]);

// export default function GroupSlider() {
//   return (
//     <div className="group-swiper">
//       <div className="silder-title">
//         <h2>خدمات توانمند سازی روشا</h2>
//       </div>
//       <Swiper
//         slidesPerView={5}
//         spaceBetween={0}
//         slidesPerGroup={5}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         className="mySwiper rosha-swiper"
//       >
//         <SwiperSlide>
//           <div className="inner">
//             <img className="img-swiper" src={img3} />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="inner">
//             <img className="img-swiper" src={img3} />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="inner">
//             <img className="img-swiper" src={img3} />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="inner">
//             <img className="img-swiper" src={img3} />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="inner">
//             <img className="img-swiper" src={img3} />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="inner">
//             <img className="img-swiper" src={img3} />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="inner">
//             <img className="img-swiper" src={img3} />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination"

// import "./styles.css";

// // import Swiper core and required modules
// import SwiperCore, {
//   Pagination
// } from 'swiper';

// // install Swiper modules
// SwiperCore.use([Pagination]);

// export default function App() {

//   return (
//     <>
//     <Swiper slidesPerView={4} spaceBetween={30} centeredSlides={true} pagination={{
//   "clickable": true
// }} className="mySwiper">
//   <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
//   </Swiper>
//     </>
//   )
// }




// new


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"

import "./group-slider.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
  <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide>
  </Swiper>
    </>
  )
}