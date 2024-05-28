import React from 'react';

import { PrincipleType } from '@/components/ui-kit/PrincipleCard/types';

import { PrincipleCard } from '@/components/ui-kit/PrincipleCard';

import principles from 'data/aboutPrinciples.json';

export const PrinciplesList: React.FC = () => {
  return (
    <ul className="grid grid-cols-1 gap-y-[20px] xl:grid-rows-1 xl:grid-cols-3 xl:gap-x-[72px] w-fit mx-auto">
      {principles.principlesCards.map(el => {
        return <PrincipleCard key={el.id} principle={el as PrincipleType} />;
      })}
    </ul>
  );
};
