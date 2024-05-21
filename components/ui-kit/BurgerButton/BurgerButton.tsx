'use client';

import React, { useState } from 'react';
import cn from 'classnames';

import { MobileMenu } from '@/components/modules/MobileMenu';

import { ICONS } from '../Icons';

type BurgerButtonProps = {
  className?: string;
};

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  className = '',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        className={cn(
          'w-10 h-10 flex items-center justify-center cursor-pointer',
          className,
        )}
      >
        <ICONS.BURGER className="w-8 h-5" />
      </button>

      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};
