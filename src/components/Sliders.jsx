import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { items } from "../data/SliderData";

export default function Slider() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <div key={index} className=" ">
              <div className=" flex justify-center items-center flex-col   ">
                <img
                  className=" relative md:h-[100vh] md:w-[100vw] h-[35vh] w-[100vw]  object-cover"
                  src={item.image}
                  alt=""
                />
                <span className=" md:mt-0 mt-12 md:px-0 px-4 z-20 flex flex-col gap-2 justify-center items-center absolute tracking-widest text-2xl md:text-5xl text-gray-100 font-bold">
                <span>{item.name}</span>  
                  <span>{item.desc}</span>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}