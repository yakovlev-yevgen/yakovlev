import React from 'react';

import ticker from 'data/ticker.json';

export const Ticker: React.FC = () => {
  return (
    <div className="ticker bg-ui_accent_transparent_30 mx-auto block overflow-hidden">
      <div className="flex gap-10 justify-around items-center h-[60px] xl:h-[100px]">
        <p className="font-ui_kurier text-ui_bold_14 xl:text-ui_bold_20 text-ui_dark whitespace-nowrap">
          {ticker.tickerText}
        </p>

        <p className="font-ui_kurier text-ui_bold_14 xl:text-ui_bold_20 text-ui_dark whitespace-nowrap">
          {ticker.tickerText}
        </p>
      </div>
    </div>
  );
};
