import React from 'react';
import cn from 'classnames';

import { Container } from '@/components/ui-kit/Container';
import { Logo } from '@/components/ui-kit/Logo';
import { NavBar } from '@/components/modules/NavBar';
import { BurgerButton } from '@/components/ui-kit/BurgerButton';
import { Contact } from '@/components/ui-kit/Contact';

import common from 'data/common.json';

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header
      className={cn(
        'fixed z-30 w-full h-[60px] left-0 top-0 bg-ui_dark py-[10px] border-b-[1px] border-ui_accent ',
        className,
      )}
    >
      <Container className="flex flex-row-reverse justify-between items-center xl:flex-row">
        <BurgerButton className="xl:hidden" />

        <Logo />

        <NavBar section="header" />

        <Contact phoneNumber={common.contacts.phoneNumber} />
      </Container>
    </header>
  );
};
