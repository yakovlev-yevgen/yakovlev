'use client';
import React from 'react';

import { Price } from '@/utils/fetchServices';

import servicesData from 'data/services.json';

type ServiceCardProps = {
  title: string;
  price: Price;
  bgUrl: string;
  bgUrlRetina: string;
  description: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price: { oneSession, fiveSessions },
  bgUrl,
  bgUrlRetina,
  description,
}) => {
  const {
    cardsData: { firstParagraph, secondParagraph, currency },
  } = servicesData;

  return (
    <div className="w-[343px] md:w-[302px] xl:w-[400px]">
      <div
        className={`rounded-[16px] p-5 w-[275px] h-[225px] xl:w-[400px] xl:h-[356px] mb-2 xl:mb-5 mx-auto bg-cover bg-ui_dark bg-image`}
      >
        <style jsx>{`
          .bg-image {
            background-image: url(${bgUrl});
          }
          @media only screen and (min-device-pixel-ratio: 2),
            only screen and (min-resolution: 192dpi) {
            .bg-image {
              background-image: url(${bgUrlRetina});
            }
          }
        `}</style>
        <div className="flex flex-col items-center justify-between py-5 px-[6px] xl:py-[60px] xl:px-[14px] w-full h-full border border-ui_light rounded-[16px]">
          <h3 className="font-ui_kurier text-ui_reg_24_100 xl:text-ui_reg_36_100 text-ui_light text-center">
            {title}
          </h3>

          <div>
            <p className="text-ui_light text-ui_light_16 xl:text-ui_light_20">
              {firstParagraph} - {oneSession} {currency}
            </p>
            <p className="text-ui_light text-ui_light_16 xl:text-ui_light_20">
              {secondParagraph} - {fiveSessions} {currency}
            </p>
          </div>
        </div>
      </div>

      <p className="text-ui_light_14 xl:text-ui_light_16 text-center">
        {description}
      </p>
    </div>
  );
};
