import React from 'react';
import cn from 'classnames';
import { ICONS } from '../Icons';
import socials from 'data/socials.json';

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
        <a
          key={index}
          href={href}
          className={cn(
            'w-[42px] h-[42px] flex items-center justify-center bg-ui_accent hover:bg-ui_light focus:bg-ui_light text-ui_light hover:text-ui_accent focus:text-ui_accent transition duration-300 rounded-full border border-ui_accent',
          )}
          rel="nofollow noreferrer noopener"
          target="_blank"
          aria-label={`Посетить аккаунт в соцсети ${title}`}
        >
          {title.toLocaleLowerCase() === 'instagram' && (
            <ICONS.INSTAGRAM className=" h-[22px]" />
          )}
          {title.toLocaleLowerCase() === 'telegram' && (
            <ICONS.TELEGRAM className=" h-[22px]" />
          )}
        </a>
      ))}
    </ul>
  );
};
