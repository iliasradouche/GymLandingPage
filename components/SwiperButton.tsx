"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
const SwiperButton = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
}) => {
  const swiper = useSwiper();
  return (
    <div className={`${containerStyles}`}>
      <button title="btn swipe left" className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={`${iconsStyles}`} />
      </button>
      <button title="btn swipe right" className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={`${iconsStyles}`} />
      </button>
    </div>
  );
};

export default SwiperButton;