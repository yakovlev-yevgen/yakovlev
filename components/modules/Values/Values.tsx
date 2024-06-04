import React from 'react';
import Image from 'next/image';

import { Accordion } from '../Accordion';
import { SectionSubTitle } from '@/components/ui-kit/SectionSubTitle';
import { Button } from '@/components/ui-kit/Button';

import aboutValues from 'data/aboutValues.json';
import faq from '@/data/faq.json';
import classNames from 'classnames';

export const Values: React.FC = () => {
  const {
    subtitle,
    paragraphBold,
    paragraph,
    imageAlt,
    imageMobSrc,
    imageBigSrc,
    btn,
  } = aboutValues;

  return (
    <div className="mb-[60px] md:mb-20 xl:grid xl:grid-cols-2 xl:grid-rows-[112px_264px_auto_auto]">
      <SectionSubTitle className="xl:col-span-2">{subtitle}</SectionSubTitle>

      <div className="col-start-2">
        <p className="text-ui_reg_16 xl:text-ui_reg_20 mb-2">{paragraphBold}</p>

        {paragraph.map((p, index) => (
          <p
            key={index}
            className={classNames(
              'text-ui_light_14 md:text-ui_light_16 xl:mb-5',
              {
                'mb-[28px] md:mb-8': index === paragraph.length - 1,
              },
              { 'mb-2 md:mb-4': index !== paragraph.length - 1 },
            )}
          >
            {p}
          </p>
        ))}
      </div>

      {/* mobile image */}
      <div className="md:hidden mx-auto mb-8 rounded-2xl overflow-hidden min-w-[343px] max-w-[440px] min-h-[440px] w-full h-[calc(100%_*_1.2827)] max-h-[calc(440*1.2827)] object-cover object-center">
        <Image
          src={imageMobSrc}
          alt={imageAlt}
          width={505}
          height={647}
          className="w-full h-full"
        />
      </div>

      {/* tab and desc image */}
      <div className="smOnly:hidden notXl:mb-8 rounded-2xl overflow-hidden w-[505px] h-[647px] object-cover object-center md:mx-auto xl:col-start-1 xl:row-start-2">
        <Image
          src={imageBigSrc}
          alt={imageAlt}
          width={505}
          height={647}
          className="w-full h-full"
        />
      </div>

      <Accordion
        items={faq}
        className="notXl:mb-8 mdOnly:w-[610px] mdOnly:mx-auto xl:col-start-2 xl:row-start-3"
      />

      <Button className="mx-auto block xl:row-start-4 xl:col-span-2 xl:mt-10">
        {btn}
      </Button>
    </div>
  );
};
