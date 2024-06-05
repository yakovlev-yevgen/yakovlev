import React from 'react';

import { PrincipleType } from '@/components/ui-kit/PrincipleCard/types';

import { PrincipleCard } from '@/components/ui-kit/PrincipleCard';

import principles from 'data/aboutPrinciples.json';

export const PrinciplesList: React.FC = () => {
  return (
    <ul className="grid grid-cols-1 gap-y-[20px] xl:grid-rows-1 xl:grid-cols-3 xl:gap-x-[72px] w-fit mx-auto mdOnly:hidden">
      {principles.principlesCards.map(el => {
        return (
          <li key={el.id}>
            <PrincipleCard principle={el as PrincipleType} />
          </li>
        );
      })}
    </ul>
  );
};
