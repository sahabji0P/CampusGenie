import React from 'react'
import { BiSkipNextCircle } from 'react-icons/bi'
import { useSwiper } from 'swiper/react';
import './SlideNext.css'

const SlideNext = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      {/* <BiSkipNextCircle
        className='SlideNext' 
      /> */}
      <img src="https://cdn.hugeicons.com/icons/next-stroke-rounded.svg" alt="next" width="24" height="24" className='SlideNext'/>
    </button>
  );
}

export default SlideNext;
