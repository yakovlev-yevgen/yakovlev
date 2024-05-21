import React from 'react';
import cn from 'classnames';
import { SocialLink } from '@/components/ui-kit/SocialLink';
import { IconName } from '@/components/ui-kit/Icons';
import socials from '@/data/socials.json';

type SocialsProps = {
  listClassName?: string;
  section: 'footer' | 'hero' | 'menu';
};

export const Socials: React.FC<SocialsProps> = ({
  section,
  listClassName = '',
}) => {
  return (
    <ul
      className={cn(
        'w-fit flex mdOnly:gap-10 gap-[56px]',
        { 'mx-auto xl:mx-0': section === 'footer' },
        { 'hidden md:flex': section === 'hero' },
        { 'flex mx-auto md:hidden': section === 'menu' },
        listClassName,
      )}
    >
      {socials.map(({ href, title }, index) => (
        <li key={index}>
          <SocialLink
            href={href}
            title={title.toLocaleUpperCase() as IconName}
          />
        </li>
      ))}
    </ul>
  );
};
