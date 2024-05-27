import React from 'react';
import servicesData from 'data/services.json';

type ServiceCardProps = {
  title: string;
  priceOneSession: number;
  priceFiveSessions: number;
  imageUrl: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  priceFiveSessions,
  priceOneSession,
  imageUrl,
}) => {
  const {
    cardsData: { firstParagraph, secondParagraph, currency },
  } = servicesData;

  return (
    <div className="">
      <div
        className={`rounded-[16px] p-5 w-[275px] h-[225px] xl:w-[400px] xl:h-[356px]`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="flex flex-col items-center justify-between p-5 xl:py-[60px] xl:px-[14px] w-full h-full border border-ui_light rounded-[16px]">
          <h3 className="font-ui_kurier text-ui_reg_24_100 xl:text-ui_reg_36_100 text-ui_light">
            {title}
          </h3>

          <div>
            <p className="text-ui_light text-ui_light_16 xl:text-ui_light_20">
              {firstParagraph} - {priceOneSession} {currency}
            </p>
            <p className="text-ui_light text-ui_light_16 xl:text-ui_light_20">
              {secondParagraph} - {priceFiveSessions} {currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
