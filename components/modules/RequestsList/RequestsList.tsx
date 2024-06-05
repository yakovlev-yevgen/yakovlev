import React from 'react';

import { RequestItem } from '@/components/ui-kit/RequestItem';
import classNames from 'classnames';

type RequestsListProps = {
  items: string[];
  className?: string;
};

export const RequestsList: React.FC<RequestsListProps> = ({
  items,
  className = '',
}) => {
  return (
    <ul
      className={classNames(
        'w-[295px] grid grid-cols-1 gap-y-2 md:gap-y-4 xl:gap-y-8',
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={index}>
          <RequestItem>{item}</RequestItem>
        </li>
      ))}
    </ul>
  );
};
