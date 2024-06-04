import classNames from 'classnames';
import React from 'react';

type SectionSubTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionSubTitle: React.FC<SectionSubTitleProps> = ({
  children,
  className = '',
}) => {
  return (
    <h3
      className={classNames(
        'font-ui_kurier text-ui_accent text-ui_reg_32_100 md:text-ui_reg_40_100 xl:text-ui_reg_60_100 mb-8 xl:mb-[52px] text-center',
        className,
      )}
    >
      {children}
    </h3>
  );
};
