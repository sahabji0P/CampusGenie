import React, { useContext,useState,useEffect } from "react";
import "./LaundryServices.css";
import { StoreContext } from "../../context/StoreContext";
import ServicesCard from "../ServicesCard/ServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlidePrev from "./SlidePrev";
import SlideNext from "./SlideNext";

const LaundryServices = () => {
  const { ServiceList } = useContext(StoreContext);
  const [slidesInview, setSlidesInView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setSlidesInView(1);
    } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
      setSlidesInView(2);
    } else {
      setSlidesInView(4);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Our Services</h1>

      <Swiper
        spaceBetween={10}
        slidesPerView={slidesInview}
        className="SwiperClass"
      >
        <div className='SlidingIcons'>
        <SlidePrev />
        <SlideNext />
        </div>


        <div className="ServiceCardContainer">
          {ServiceList.map((service, index) => (
            <SwiperSlide className="CardSlider">
              <ServicesCard key={index} service={service} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default LaundryServices;
