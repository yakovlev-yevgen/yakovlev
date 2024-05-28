import React from 'react';
import { PrincipleType } from './types';

import { ICONS } from '@/components/ui-kit/Icons';

type PrincipleCardProps = {
  principle: PrincipleType;
};

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle }) => {
  const Icon = ICONS[principle.id];

  return (
    <div className="w-[275px] h-[225px] xl:w-[295px] xl:h-[255px] relative after:absolute after:content-[''] after:h-[1px] after:w-[212px] after:bg-ui_accent after:left-1/2 after:-translate-x-1/2 after:top-[142px] xl:after:top-[164px] py-[20px] flex flex-col justify-start items-center border border-ui_accent rounded-2xl">
      <Icon className="w-20 h-20 xl:w-[100px] xl:h-[100px] shrink-0 mb-4" />

      <p className="mb-[20px] text-ui_light_16 xl:text-ui_light_20">
        {principle.title}
      </p>

      <p className="text-center text-ui_light_14 xl:text-ui_light_16 whitespace-break-spaces">
        {principle.description}
      </p>
    </div>
  );
};
