import React from 'react';
import cn from 'classnames';
import { DataLinkType } from '@/components/ui-kit/NavItem/types';

import { NavItem } from '@/components/ui-kit/NavItem';

import navData from 'data/navData.json';

type NavBarProps = {
  section: 'header' | 'footer' | 'menu';
  listClassName?: string;
  closeMenuFunction?: () => void | undefined;
};

export const NavBar: React.FC<NavBarProps> = ({
  listClassName = '',
  section,
  closeMenuFunction,
}) => {
  return (
    <ul
      className={cn(
        'flex gap-10',
        { 'hidden xl:flex xl:gap-20 h-10': section === 'header' },
        {
          'mx-auto flex-col md:flex-row md:gap-20 xl:mx-0 md:h-10':
            section === 'footer',
        },
        {
          'xl:hidden flex-col md:gap-[48px] md:mx-auto': section === 'menu',
        },
        listClassName,
      )}
    >
      {navData.map((dataLink: DataLinkType, index) => {
        return (
          <NavItem
            key={index}
            dataLink={dataLink}
            withLines={section !== 'menu'}
            textAlignCenter={section === 'footer'}
            handleClick={closeMenuFunction && closeMenuFunction}
          />
        );
      })}
    </ul>
  );
};
