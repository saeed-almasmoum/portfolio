"use client"
import { useSwiper } from "swiper/react"
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi"
export default function WorkSliderBtns({containerStyles , btnStyles , iconStyles}) {
  const swiper = useSwiper();
    return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles}></PiCaretLeftBold>
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold  onClick={()=> swiper.slideNext()}></PiCaretRightBold>
      </button>
    </div>
  )
}
