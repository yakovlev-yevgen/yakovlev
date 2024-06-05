'use client';
import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import cn from 'classnames';

import 'swiper/css';
import 'swiper/css/pagination';

interface SliderProps {
  children: ReactNode[];
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({ children, className = '' }) => {
  return (
    <Swiper
      className={cn('sliderSwiper', className)}
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{ delay: 5000 }}
      grabCursor={true}
      lazyPreloadPrevNext={1}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
