'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { PrincipleType } from '@/components/ui-kit/PrincipleCard/types';

import { SectionSubTitle } from '@/components/ui-kit/SectionSubTitle';
import { PrinciplesList } from '../PrinciplesList';
import { Slider } from '@/components/ui-kit/Slider';
import { PrincipleCard } from '@/components/ui-kit/PrincipleCard';

import aboutPrinciples from 'data/aboutPrinciples.json';

export const Principles: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const isTablet: boolean = useMediaQuery({
    minWidth: 768,
    maxWidth: 1279,
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated && (
        <div className="mb-[60px] xl:mb-20">
          <SectionSubTitle>{aboutPrinciples.subtitle}</SectionSubTitle>

          {isTablet ? (
            <Slider
              spaceBetween={40}
              className="w-[590px]"
              slideClassName="w-[275px]"
            >
              {aboutPrinciples.principlesCards.map((el, index) => {
                return (
                  <PrincipleCard key={index} principle={el as PrincipleType} />
                );
              })}
            </Slider>
          ) : (
            <PrinciplesList />
          )}
        </div>
      )}
    </>
  );
};
