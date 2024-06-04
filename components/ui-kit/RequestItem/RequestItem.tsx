import React from 'react';

type RequestItemProps = {
  children: React.ReactNode;
};

export const RequestItem: React.FC<RequestItemProps> = ({ children }) => {
  return (
    <div className="h-[46px] flex items-center justify-center border border-ui_accent rounded-2xl whitespace-pre-wrap text-center text-ui_light_16">
      {children}
    </div>
  );
};
