import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import { Slider } from '@/components/ui-kit/Slider';

import reviews from 'data/reviews.json';
import QuotesIcon from 'public/icons/quotes.svg';

export const ReviewsSlider: React.FC = () => {
  const { reviews: reviewsArray } = reviews;

  return (
    <Slider slidesPerView={1} className="mb-5 md:!hidden">
      {reviewsArray.map((review, index) => {
        return (
          <div
            key={index}
            className={`h-full flex items-center justify-center ${index % 2 !== 0 ? 'rounded-r-2xl ' : 'rounded-l-2xl '}`}
          >
            <div
              style={
                {
                  '--bg-color': 'linear-gradient(#F1F1F1,#F1F1F1)',
                  '--border-color-right':
                    'linear-gradient(90deg, rgba(32,32,32,0) 0%, rgba(32,32,32,1) 100%)',
                  '--border-color-left':
                    'linear-gradient(270deg, rgba(32,32,32,0) 0%, rgba(32,32,32,1) 100%)',
                } as CSSProperties
              }
              className={`relative py-5 w-full h-full flex border border-transparent items-center ${index % 2 !== 0 ? 'pr-[47px] pl-[10px] rounded-r-2xl [background:padding-box_var(--bg-color),border-box_var(--border-color-right)]' : 'pl-[47px] pr-[10px] rounded-l-2xl [background:padding-box_var(--bg-color),border-box_var(--border-color-left)]'}`}
            >
              <p className="text-ui_dark text-ui_reg_16 font-ui_kurier whitespace-pre-wrap">
                {review}
              </p>

              <QuotesIcon
                className={classNames(
                  'w-[20px] h-[17px] absolute top-3 text-ui_accent',
                  {
                    'right-3': index % 2 !== 0,
                    'left-3': index % 2 === 0,
                  },
                )}
              />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
