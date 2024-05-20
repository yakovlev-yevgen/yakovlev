import React from 'react';
import cn from 'classnames';
import { ICONS } from '../Icons';

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <a
      href="/"
      className={cn(
        'inline-block transition-colors duration-250 text-ui_accent focus:text-ui_light hover:text-ui_light',
        className,
      )}
      aria-label="логотип"
    >
      <ICONS.LOGO className="fill-current w-[148px] h-[20px]" />
    </a>
  );
};
