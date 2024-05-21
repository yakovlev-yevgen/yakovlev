import cn from 'classnames';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
}) => {
  return <div className={cn('container', className)}>{children}</div>;
};
