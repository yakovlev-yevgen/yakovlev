import React from 'react';
import cn from 'classnames';

import { ICONS } from '../Icons';

import common from 'data/common.json';

type ContactProps = {
  phoneNumber: string;
  className?: string;
};

export const Contact: React.FC<ContactProps> = ({
  phoneNumber,
  className = '',
}) => {
  return (
    <a
      className={cn(
        'inline-block font-ui_roboto text-ui_reg_20 text-ui_light notXl:w-10 notXl:h-10 notXl:flex notXl:items-center notXl:justify-center notXl:bg-ui_accent notXl:rounded-[50%] notXl:border notXl:border-transparent notXl:hocus:bg-ui_light notXl:hocus:border-ui_accent notXl:text-white notXl:hocus:text-ui_accent notXl:transition-colors notXl:duration-250 xl:cursor-default xl:pointer-events-none',
        className,
      )}
      href={`tel:${phoneNumber.replace(' ', '')}`}
      aria-label={common.contacts.phoneAria}
    >
      <ICONS.PHONE className="hidden w-[25px] h-[25px] stroke-current notXl:block" />
      <span className="hidden xl:block">{phoneNumber}</span>
    </a>
  );
};
