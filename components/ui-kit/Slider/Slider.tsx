'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import cn from 'classnames';

import 'swiper/css';
import 'swiper/css/pagination';

interface SliderProps {
  children: ReactNode[];
  spaceBetween?: number;
  slidesPerView?: number;
  className?: string;
  slideClassName?: string;
}

export const Slider: React.FC<SliderProps> = ({
  children,
  spaceBetween = 20,
  slidesPerView = 2,
  className = '',
  slideClassName = '',
}) => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated && (
        <Swiper
          className={cn('sliderSwiper', className)}
          modules={[Autoplay, Pagination]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          slidesPerGroup={3}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          lazyPreloadPrevNext={2}
        >
          {children.map((child, index) => (
            <SwiperSlide
              key={index}
              className={cn('!h-auto', { slideClassName })}
            >
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
