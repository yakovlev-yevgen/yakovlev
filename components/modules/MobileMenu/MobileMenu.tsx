'use client';

import React from 'react';
// import cn from 'classnames';

import { BaseModal } from '@/components/ui-kit/BaseModal';
import { NavBar } from '../NavBar';
import { Socials } from '../Socials';

type MobileMenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  closeMenu,
}) => {
  return (
    <BaseModal
      isOpen={isMenuOpen}
      closeModal={closeMenu}
      dialogClassName="xl:hidden"
      modalClassName="w-screen h-screen pt-[60px] relative after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-ui_accent after:left-0 after:top-[352px] bg-ui_dark text-white"
      containerClassName="px-4 pt-[50px] max-w-[448px] h-full mx-auto flex flex-col items-start"
      closeBtnClassName="right-0 md:right-[-15px] top-[-35px] text-white"
    >
      <NavBar section="menu" listClassName="mb-[130px]" />
      <Socials section="menu" />
    </BaseModal>
  );
};
