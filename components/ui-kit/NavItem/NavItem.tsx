'use client';

import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import cn from 'classnames';

import { DataLinkType } from './types';

type NavItemProps = {
  dataLink: DataLinkType;
  withLines: boolean;
  textAlignCenter: boolean;
  handleClick?: () => void | undefined;
  className?: string;
};

export const NavItem: React.FC<NavItemProps> = ({
  dataLink: { href, title },
  withLines,
  textAlignCenter,
  className = '',
  handleClick,
}) => {
  return (
    <li
      className={cn(
        {
          "smOnly:h-[18px] md:after:content-[''] md:after:absolute md:relative md:after:bg-ui_accent md:after:w-[1px] md:after:h-full md:after:right-[-40px] md:after:top-0 md:after:last:hidden":
            withLines === true,
        },
        { 'text-center': textAlignCenter },
        className,
      )}
    >
      <LinkScroll
        onClick={() => handleClick && handleClick()}
        smooth={true}
        offset={0}
        duration={500}
        to={href}
        href={`#${href}`}
        className={cn(
          'text-ui_light hover:text-ui_accent focus:text-ui_accent transition-colors duration-250 text-ui_light_16 md:text-ui_light_20 whitespace-nowrap text h-full w-fit flex items-center',
          { 'inline-flex': textAlignCenter },
        )}
      >
        {title}
      </LinkScroll>
    </li>
  );
};
