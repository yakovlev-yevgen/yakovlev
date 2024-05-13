import React from 'react';
import cn from 'classnames';

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <a
      href="/"
      className={cn(
        'inline-block transition-transform focus:scale-110 hover:scale-110 relative z-10',
        className,
      )}
      aria-label="logo"
    >
      logo
    </a>
  );
};
