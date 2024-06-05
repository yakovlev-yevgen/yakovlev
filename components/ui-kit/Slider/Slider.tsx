'use client';
import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import cn from 'classnames';

import 'swiper/css';
import 'swiper/css/pagination';

interface SliderProps {
  children: ReactNode[];
  spaceBetween?: number;
  className?: string;
  slideClassName?: string;
}

export const Slider: React.FC<SliderProps> = ({
  children,
  className = '',
  slideClassName = '',
  spaceBetween = 20,
}) => {
  return (
    <Swiper
      className={cn('sliderSwiper', className)}
      modules={[Autoplay, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={2}
      slidesPerGroup={3}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 5000 }}
      grabCursor={true}
      lazyPreloadPrevNext={2}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index} className={slideClassName}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
