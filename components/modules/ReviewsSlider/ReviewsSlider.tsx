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
              className={classNames(
                'relative py-5 w-full h-full flex border border-transparent items-center',
                {
                  'pr-[47px] rounded-r-2xl [background:padding-box_var(--bg-color),border-box_var(--border-color-right)]':
                    index % 2 !== 0,
                  'pl-[47px] rounded-l-2xl [background:padding-box_var(--bg-color),border-box_var(--border-color-left)]':
                    index % 2 === 0,
                },
              )}
            >
              <p
                className={classNames(
                  'text-ui_dark text-ui_reg_16 font-ui_kurier whitespace-pre-wrap',
                  {
                    'text-left': index % 2 === 0,
                    'text-right': index % 2 !== 0,
                  },
                )}
              >
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
