import React from 'react';
import cn from 'classnames';

import { ICONS, IconName } from '@/components/ui-kit/Icons';

export type SocialLinkProps = {
  href: string;
  title: IconName;
};

export const SocialLink: React.FC<SocialLinkProps> = ({ href, title }) => {
  const Icon = ICONS[title];

  return (
    <a
      href={href}
      className={cn(
        'w-[42px] h-[42px] flex items-center justify-center bg-ui_accent hocus:bg-ui_light text-ui_light hocus:text-ui_accent transition duration-300 rounded-full border border-ui_accent',
      )}
      rel="nofollow noreferrer noopener"
      target="_blank"
      aria-label={`Посетить аккаунт в соцсети ${title}`}
    >
      <Icon className="h-[22px]" />
    </a>
  );
};
