import React from 'react';
import cn from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  handleClick?: () => void;
  listClassName?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  handleClick = () => {
    return;
  },
  listClassName,
}) => {
  return (
    <button
      className={cn(
        'min-w-[310px] px-4 py-[15px] font-ui_roboto text-ui_reg_20 text-ui_light text-center bg-ui_accent border-2 border-transparent rounded-2xl transition-colors duration-[250ms] hocus:bg-ui_light hocus:text-ui_accent hocus:border-ui_accent',
        listClassName,
      )}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
