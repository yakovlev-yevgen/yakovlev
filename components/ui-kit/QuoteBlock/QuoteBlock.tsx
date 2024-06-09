import React from 'react';
import classNames from 'classnames';

import QuotesIcon from 'public/icons/quotes.svg';

type QuoteBlockProps = {
  content: string;
  quotesPosition: 'left' | 'right';
  className?: string;
};

export const QuoteBlock: React.FC<QuoteBlockProps> = ({
  content,
  quotesPosition,
  className,
}) => {
  return (
    <div
      className={classNames(
        "absolute md:h-[227px] xl:w-[460px] xl:h-[300px] flex items-center justify-center  py-[18px] smOnly:hidden before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 after:border-transparent",
        {
          'rounded-r-2xl md:pr-[48px] xl:pt-[90px] xl:pb-[66px] xl:pl-[84px] xl:pr-[52px]':
            quotesPosition === 'right',
          'rounded-l-2xl pl-[48px] md:pr-[13px] xl:py-[66px] xl:pl-[52px] xl:pr-[84px]':
            quotesPosition === 'left',
        },
        className,
      )}
    >
      {/* <div className=""> */}
      <p
        className={classNames(
          'text-ui_light md:text-ui_reg_16 xl:text-ui_reg_20 font-ui_kurier whitespace-pre-wrap',
          {
            'text-right xl:text-left': quotesPosition === 'right',
            'text-left': quotesPosition === 'left',
          },
        )}
      >
        {content}
      </p>

      <QuotesIcon
        className={classNames(
          'w-[20px] h-[17px] absolute top-3 text-ui_light',
          {
            'right-3': quotesPosition === 'right',
            'left-3': quotesPosition !== 'right',
          },
        )}
      />
      {/* </div> */}
    </div>
  );
};
