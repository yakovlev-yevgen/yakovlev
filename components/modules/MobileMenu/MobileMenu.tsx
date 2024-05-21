'use client';

import React from 'react';

import { BaseModal } from '@/components/ui-kit/BaseModal';
import { NavBar } from '../NavBar';
import { Socials } from '../Socials';
import { Logo } from '@/components/ui-kit/Logo';

import { ICONS } from '../../ui-kit/Icons';
import common from 'data/common.json';

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
      modalClassName="w-screen h-screen z-40 relative after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-ui_accent after:left-0 after:top-[352px] before:absolute before:content-[''] before:h-[1px] before:w-full before:bg-ui_accent before:left-0 before:top-[60px] bg-ui_dark text-white md:after:hidden"
      containerClassName="px-4 md:px-8 pt-[10px] max-w-[480px] md:max-w-[768px] h-full mx-auto flex flex-col items-start"
      closeBtnClassName="hidden"
    >
      <div className="w-full flex justify-between items-center mb-[60px] md:mb-[70px] h-10">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-ui_light cursor-pointer w-10 h-10"
        >
          кнопка тел
        </a>

        <Logo />

        <button
          type="button"
          onClick={closeMenu}
          aria-label={common.menu.closeAria}
          className="w-10 h-10 cursor-pointer flex items-center justify-center text-ui_accent hocus:text-ui_light transition-colors duration-250"
        >
          <ICONS.CLOSE className="w-[14px] h-[14px]" />
        </button>
      </div>

      <NavBar
        section="menu"
        listClassName="mb-[130px]"
        closeMenuFunction={closeMenu}
      />

      <Socials section="menu" />
    </BaseModal>
  );
};
