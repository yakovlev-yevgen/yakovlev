import React from 'react';
import Image from 'next/image';

import { SectionSubTitle } from '@/components/ui-kit/SectionSubTitle';
import { Button } from '@/components/ui-kit/Button';
import { RequestsList } from '../RequestsList';

import aboutRequests from 'data/aboutRequests.json';

// type RequestsProps = {};

export const Requests: React.FC = () => {
  const {
    subtitle,
    requestsLists: { firstList, secondList },
    imageAlt,
    imageSrc,
    buttonText,
    buttonAnchor,
  } = aboutRequests;

  return (
    <div className="md:grid md:grid-cols-2 md:grid-rows-[72px_480px_711px_auto] md:gap-x-[114px] xl:grid-cols-[295px_auto_295px] xl:gap-x-[73px] xl:grid-rows-[112px_646px_87px] xl:items-center">
      <SectionSubTitle className="md:col-span-2 xl:col-span-3">
        {subtitle}
      </SectionSubTitle>

      <RequestsList
        items={firstList}
        className="mx-auto smOnly:mb-8 md:col-span-1 md:col-start-1 md:row-start-2"
      />

      <div className="mb-8 md:mt-8 w-full mx-auto smOnly:max-w-[440px] min-w-[295px] smOnly:aspect-[343/440] h-auto md:w-[505px] xl:w-[504px] xl:h-[646px] md:h-[647px] rounded-2xl overflow-hidden object-bottom object-cover md:row-start-3 md:col-span-2 xl:col-span-1 xl:col-start-2 xl:row-start-2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={505}
          height={647}
          className="w-full h-full"
        />
      </div>

      <RequestsList
        items={secondList}
        className="mx-auto smOnly:mb-8 md:col-span-1 md:col-start-2 md:row-start-2 xl:col-start-3"
      />

      <Button
        className="mx-auto block md:row-start-4 md:col-span-2 xl:col-span-3 xl:row-start-3 xl:mt-8"
        anchor={buttonAnchor}
      >
        {buttonText}
      </Button>
    </div>
  );
};
