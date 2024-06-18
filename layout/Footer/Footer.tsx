import React from 'react';

import { Container } from '@/components/ui-kit/Container';
import { Logo } from '@/components/ui-kit/Logo';
import { NavBar } from '@/components/modules/NavBar';
import { Socials } from '@/components/modules/Socials';

import footer from 'data/footer.json';

export const Footer: React.FC = () => {
  const { copyright, designed, designedByLinkTitle, designedSrc } = footer;

  return (
    <footer className="py-10 md:py-8 xl:py-20 bg-ui_dark mt-auto relative after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-ui_accent after:left-0 after:top-[434px] md:after:top-[262px] xl:after:top-[160px] before:absolute before:content-[''] before:h-[1px] before:w-full before:bg-ui_accent before:left-0 before:top-[312px] md:before:top-[156px] xl:before:hidden">
      <Container className="flex flex-col items-center">
        <div className="xl:flex items-center xl:mb-[78px]">
          <Logo className="mb-10 md:mr-auto md:mb-8 xl:mb-0 xl:mr-[134px]" />

          <NavBar
            section="footer"
            listClassName="mb-[60px] md:mb-[64px] xl:mb-0 xl:mr-[143px]"
          />

          <Socials section="footer" listClassName="mb-[48px] xl:mb-0" />
        </div>

        <div className="xl:flex xl:items-center xl:justify-between xl:w-full text-center">
          <p className="mb-4 text-ui_light text-ui_light_14 md:text-ui_light_16 text-center xl:mb-0">
            {copyright}
          </p>

          <p>
            <span className="text-ui_light_transparent_50 text-ui_light_14 ">
              {designed}
            </span>

            <a
              href={designedSrc}
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="text-ui_light_transparent_50 text-ui_light_14 hocus:text-ui_accent transition-colors duration-250"
            >
              {designedByLinkTitle}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
