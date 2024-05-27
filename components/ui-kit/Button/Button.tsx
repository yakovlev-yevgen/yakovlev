import React from 'react';
import cn from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  handleClick = () => {
    return;
  },
  disabled = false,
  className = '',
}) => {
  return (
    <button
      className={cn(
        'min-w-[310px] min-h-[55px] px-4 py-2 font-ui_roboto text-ui_reg_20 text-ui_light text-center bg-ui_accent border-2 border-transparent rounded-2xl transition-colors duration-[250ms] hocus:bg-ui_light hocus:text-ui_accent hocus:border-ui_accent cursor-pointer',
        {
          'cursor-wait bg-ui_accent_transparent_50 hocus:bg-ui_accent_transparent_50 hocus:text-ui_light':
            disabled,
        },
        className,
      )}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
