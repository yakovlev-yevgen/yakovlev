import React from 'react';
import Image from 'next/image';

import { Container } from '@/components/ui-kit/Container';
import { Button } from '@/components/ui-kit/Button';
import { Socials } from '@/components/modules/Socials';

import hero from 'data/hero.json';
import HeroImage from 'public/images/yevgen-hero@2x.jpg';

export const Hero: React.FC = () => {
  const {
    firstName,
    lastName,
    warranties,
    price,
    proffessionFirstLine,
    proffessionSecondLine,
    button: buttonTitle,
  } = hero;

  return (
    <section className="bg-ui_dark text-ui_light pt-[20px] pb-10 md:pt-20 md:pb-[250px] overflow-x-hidden xl:py-[128px]">
      <Container className="relative">
        <p className="text-ui_light_16 md:text-ui_light_20 mb-[20px] md:mb-10 xl:mb-0">
          <span className="smOnly:block">{proffessionFirstLine}</span>
          <span className="text-ui_accent text-ui_reg_20 md:text-ui_reg_24 smOnly:block">
            {proffessionSecondLine}
          </span>
        </p>

        <h1 className="text-ui_reg_60 md:text-ui_reg_80 xl:text-ui_reg_120 font-ui_kurier text-ui_accent mb-[526px] md:mb-10 h-[131px] md:h-[175px] xl:h-[262px] relative z-[1]">
          <span className="block">{firstName}</span>
          <span className="pl-[113px] xl:pl-[170px] block relative z-[1] -top-3">
            {lastName}
          </span>
        </h1>

        <div className="w-[385px] h-[550px] md:w-[622px] md:h-[830px] xl:w-[670px] xl:h-[900px] absolute top-[146px] right-0 md:right-[-60px] md:top-[54px] xl:top-[-128px] xl:right-[-50px] xxl:right-0 z-0">
          <Image
            src={HeroImage}
            alt={`${firstName} ${lastName} сидит на стуле`}
            width={650}
            height={900}
            priority
            className="h-full w-full object-cover xl:object-right-bottom"
          />
        </div>

        <p className="text-ui_light_14 md:text-ui_light_20 mb-10 md:w-[302px] xl:w-[450px] inline-block relative z-[1]">
          <span className="whitespace-break-spaces inline text-ui_light_14 md:text-ui_light_20">
            {warranties}
          </span>
          <span className="text-ui_reg_20 text-ui_accent inline">{price}</span>
        </p>

        <Button
          type="button"
          className="mx-auto block md:ml-0 md:mb-[120px] xl:mb-[128px] relative z-[1]"
        >
          {buttonTitle}
        </Button>

        <Socials section="hero" listClassName="relative z-[1]" />
      </Container>
    </section>
  );
};
