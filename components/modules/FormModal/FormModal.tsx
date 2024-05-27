'use client';

import React from 'react';

import { BaseModal } from '@/components/ui-kit/BaseModal';

type FormModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  title: string;
  details: string;
};

export const FormModal: React.FC<FormModalProps> = ({
  isModalOpen,
  closeModal,
  title,
  details,
}) => {
  return (
    <BaseModal
      isOpen={isModalOpen}
      closeModal={closeModal}
      dialogClassName=""
      modalClassName="w-[350px] h-[186px] xl:w-[490px] xl:h-[260px] z-40 bg-ui_light text-ui_dark -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 absolute rounded-[16px]"
      containerClassName="px-[61px] xl:px-[62px] pt-[50px] xl:pt-[60px] h-full mx-auto flex flex-col items-start"
      closeBtnClassName="top-[12px] right-[12px] w-10 h-10 text-[#323232] hocus:text-ui_accent transition-colors duration-250"
    >
      <p className="mb-4 xl:mb-[36px] text-ui_reg_16 xl:text-ui_reg_20 text-center w-full">
        {title}
      </p>
      <p className="text-ui_light_14 xl:text-ui_light_16 text-center w-full whitespace-break-spaces">
        {details}
      </p>
    </BaseModal>
  );
};
