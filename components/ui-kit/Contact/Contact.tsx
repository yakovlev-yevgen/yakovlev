import React from 'react';
import cn from 'classnames';
import { ICONS } from '../Icons';

type ContactProps = {
  phoneNumber: string;
  listClassName?: string;
};

export const Contact: React.FC<ContactProps> = ({
  phoneNumber,
  listClassName,
}) => {
  return (
    <a
      className={cn(
        'inline-block font-ui_roboto text-ui_reg_20 text-ui_light notXl:w-10 notXl:h-10 notXl:bg-ui_accent notXl:rounded-[50%] notXl:flex notXl:items-center notXl:justify-center',
        listClassName,
      )}
      href={`tel:${phoneNumber}`}
    >
      <ICONS.PHONE className="hidden w-[25px] h-[25px] stroke-white notXl:block" />
      <span className="hidden xl:block">{phoneNumber}</span>
    </a>
  );
};
