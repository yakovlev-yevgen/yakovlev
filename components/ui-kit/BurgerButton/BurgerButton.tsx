'use client';

import React, { useState } from 'react';
import cn from 'classnames';

import { MobileMenu } from '@/components/modules/MobileMenu';

import { ICONS } from '../Icons';
import common from 'data/common.json';

type BurgerButtonProps = {
  className?: string;
};

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  className = '',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className={cn(
          'w-10 h-10 flex items-center justify-center cursor-pointer transition-colors duration-250 text-ui_accent hocus:text-ui_light',
          className,
        )}
        aria-label={common.menu.burgerAria}
      >
        <ICONS.BURGER className="w-8 h-5" />
      </button>

      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};
