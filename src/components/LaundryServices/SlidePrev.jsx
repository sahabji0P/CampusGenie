import React from 'react';
import { BiSkipPreviousCircle } from 'react-icons/bi';
import { useSwiper } from 'swiper/react';
import './SlidePrev.css'

const SlidePrev = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()}>
      {/* <BiSkipPreviousCircle className='SlidePrevious' />
       */}
       <img src="https://cdn.hugeicons.com/icons/previous-stroke-rounded.svg" alt="previous" width="24" height="24" className='SlidePrevious' />
    </button>
  )
}

export default SlidePrev;
