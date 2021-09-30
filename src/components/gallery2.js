import React from "react";

import "./gallery.css"



import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";


import { Swiper, SwiperSlide } from "swiper/react";


import SwiperCore, { Pagination, EffectCoverflow } from "swiper";

SwiperCore.use([Pagination, EffectCoverflow]);

const Images=[
  {
  url:"images/10yr.jpeg"
  },
  {
    url:"images/15yr.jpeg"
  },
  {
    url:"images/16yr.jpeg"
  },
  {
    url:"images/17yr.jpeg"
  },
  {
    url:"images/18yr.jpeg"
  },
  {
    url:"images/19yr.jpeg"
  },
  {
    url:"images/20yr.jpeg",
  }

]


function GalleryTwo() {
  return (
     
        <Swiper
          effect="coverflow"
          grabCursor="true"
          centeredSlides="true"
          spaceBetween={0}
          slidesPerView={4}
          loop="true"
          pagination={{ clickable: true, dynamicBullets: true }}
          coverflowEffect={{
            rotate: 20,
            stretch: 25,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            1200: {
              spaceBetween: 0,
              slidesPerView: 4,
            },
            500: {
              spaceBetween: 100,
              slidesPerView: 2,
            },
            411: {
              spaceBetween: 100,
              slidesPerView: 2,
            },
            300: {
              spaceBetween: 0,
              slidesPerView: 1,
            },

          }}
        >
         {Images.map((image) => (
           <SwiperSlide>
            <img src={image.url} alt="pic1" className="photos" />
           </SwiperSlide>
            
         ))}
        </Swiper>
     
  );
}

export default GalleryTwo;