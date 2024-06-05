import React from 'react';
import classNames from 'classnames';

type SectionTitleProps = {
  firstString: string;
  secondString: string;
  position: 'left' | 'right';
  className?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  firstString,
  secondString,
  position,
  className = '',
}) => {
  return (
    <h2
      className={classNames(
        'relative font-ui_kurier xl:text-ui_reg_120 md:text-ui_reg_80 text-ui_reg_60 text-ui_accent mb-8 xl:mb-10',
        {
          "text-left after:content-[''] after:h-[1px] after:w-[120px] md:after:w-[382px] xl:after:w-[600px] after:bg-ui_accent after:absolute after:right-0 after:top-1/2":
            position === 'left',
        },
        {
          "text-right before:content-[''] before:h-[1px] before:w-[120px] md:before:w-[382px] xl:before:w-[600px] before:bg-ui_accent before:absolute before:left-0 before:top-1/2":
            position === 'right',
        },
        className,
      )}
    >
      <span className="whitespace-nowrap">{firstString}</span>
      <br />
      <span
        className={classNames(
          'whitespace-nowrap',
          { 'pl-20 md:pl-[112px] xl:pl-[182px]': position === 'left' },
          { 'pr-20 md:pr-[112px] xl:pr-[182px]': position === 'right' },
        )}
      >
        {secondString}
      </span>
    </h2>
  );
};
