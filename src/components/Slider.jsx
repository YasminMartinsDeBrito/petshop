import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./Slider.css"

export default function Slider({ settings, children }) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
