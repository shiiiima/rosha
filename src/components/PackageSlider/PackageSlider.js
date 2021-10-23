
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import imgBG from "../../Assets/images/atyuv.jpg"

import "./PackageSlider.css";


// import Swiper core and required modules
import SwiperCore, {
  Parallax,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Parallax,Pagination,Navigation]);


export default function PackageSlider() {
  
  
  
  return (
    <>
    
  <Swiper style={{'--swiper-navigation-color': 'red ','--swiper-pagination-color': 'red'}} speed={600} parallax={true} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <div slot="container-start" className="parallax-bg" style={{"background-image": 'url('+imgBG+')'}} data-swiper-parallax="-23%"></div>
  <SwiperSlide>
          <div className="title" data-swiper-parallax="-300"><img src=""/></div>
          <div className="subtitle" data-swiper-parallax="-200">تا قله فاصله ای نیست</div>
          <div className="text" data-swiper-parallax="-100">
            <p>نیمرخی از ویژگی های فردی، هوش و استعدادهات رو ارائه می ده. پکیج شـامل ١٠ آزمون و خرده آزمون و با رویکرد ارزیابی چند وجهی اسـت که کنیم تا به ظرفیت های پنهان خودت پی ببری و خودتو کامل بشـناسی. این نمی دونیم چجوری بهش برســــــــــیم. اینجا جاییه که می تونیم بهتون کمک هســتیم؟! شاید تا موفقیتی که همیشـــه دنبالشـــیم راهی نمونده باشه اما اینکه کاملا از خود واقعیمون آگاه باشــــــــــــــــــــــــــیم و بدونیم عمیقا دنبال چی خیلی از ما توی مســــــیری از زندگی افتادیم که مداوم در حال تلاشیم، بدون</p>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="title" data-swiper-parallax="-300">Slide 2</div>
          <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="title" data-swiper-parallax="-300">Slide 3</div>
          <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div>
        </SwiperSlide>
  </Swiper>
    </>
  )
}






// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"

// import "./styles.css";


// // import Swiper core and required modules
// import SwiperCore, {
//   Parallax,Pagination,Navigation
// } from 'swiper';

// // install Swiper modules
// SwiperCore.use([Parallax,Pagination,Navigation]);


// export default function App() {
  
  
  
//   return (
//     <>
    
//   <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} speed={600} parallax={true} pagination={{
//   "clickable": true
// }} navigation={true} className="mySwiper">
//   <div slot="container-start" className="parallax-bg" style={{'background-image': 'url(https://swiperjs.com/demos/images/nature-1.jpg)'}} data-swiper-parallax="-23%"></div>
//   <SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">Slide 1</div>
//           <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
//               felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
//               magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
//               quis feugiat.</p>
//           </div>
//         </SwiperSlide><SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">Slide 2</div>
//           <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
//               felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
//               magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
//               quis feugiat.</p>
//           </div>
//         </SwiperSlide><SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">Slide 3</div>
//           <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
//               felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
//               magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
//               quis feugiat.</p>
//           </div>
//         </SwiperSlide>
//   </Swiper>
//     </>
//   )
// }