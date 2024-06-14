import React from 'react';

import ticker from 'data/ticker.json';
import cn from 'classnames';

type TickerProps = {
  className?: string;
};

export const Ticker: React.FC<TickerProps> = ({ className = '' }) => {
  return (
    <div
      className={cn(
        'ticker bg-ui_accent_transparent_30 mx-auto block overflow-hidden',
        className,
      )}
    >
      <div className="flex gap-10 justify-around items-center h-[60px] xl:h-[100px]">
        <p className="font-ui_kurier text-ui_bold_14 xl:text-ui_bold_20 text-ui_dark whitespace-nowrap">
          {ticker.tickerText}
        </p>

        <p className="font-ui_kurier text-ui_bold_14 xl:text-ui_bold_20 text-ui_dark whitespace-nowrap">
          {ticker.tickerText}
        </p>

        <p className="font-ui_kurier text-ui_bold_14 xl:text-ui_bold_20 text-ui_dark whitespace-nowrap notXl:hidden">
          {ticker.tickerText}
        </p>
      </div>
    </div>
  );
};
