import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import h1 from '../image/Profile/p2.png'
import h2 from '../image/Swiper/h2.png'
import h3 from '../image/Swiper/h3.png'
import { Pagination, Navigation } from "swiper/modules";
import { ImPower } from "react-icons/im";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded-3xl"
      >
        <SwiperSlide>
          <img src={h3} alt="" className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h2} alt="" className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h1} alt="" className="object-cover" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
