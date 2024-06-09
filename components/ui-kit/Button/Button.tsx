'use client';

import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import cn from 'classnames';

type CommonProps = {
  children: React.ReactNode;
  handleClick?: () => void | undefined;
  disabled?: boolean;
  className?: string;
};

interface ButtonProp extends CommonProps {
  type?: 'button' | 'submit';
  anchor?: never;
  url?: never;
}

interface AnchorProp extends CommonProps {
  anchor: string;
  url?: never;
  type?: never;
}

interface UrlProp extends CommonProps {
  url: string;
  anchor?: never;
  type?: never;
}

type ButtonProps = ButtonProp | AnchorProp | UrlProp;

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  anchor,
  url,
  handleClick,
  disabled = false,
  className = '',
}) => {
  return (
    <>
      {!url && !anchor && (
        <button
          className={cn(
            'button',
            {
              'disabled gap-4': disabled,
            },
            className,
          )}
          type={type}
          onClick={() => handleClick && handleClick()}
          disabled={disabled}
        >
          {disabled && <span className="spiner"></span>}
          {children}
        </button>
      )}
      {!!anchor && (
        <LinkScroll
          onClick={() => handleClick && handleClick()}
          smooth={true}
          offset={0}
          duration={500}
          to={anchor}
          href={`#${anchor}`}
          className={cn(
            'button',
            {
              disabled: disabled,
            },
            className,
          )}
        >
          {children}
        </LinkScroll>
      )}
      {!!url && (
        <a
          className={cn(
            'button',
            {
              disabled: disabled,
            },
            className,
          )}
          href={url}
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          {children}
        </a>
      )}
    </>
  );
};
