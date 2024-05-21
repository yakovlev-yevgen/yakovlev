'use client';

import React, { Fragment } from 'react';
import cn from 'classnames';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';

import { ICONS } from '@/components/ui-kit/Icons';

type BaseModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  modalClassName?: string;
  dialogClassName?: string;
  overlayClassName?: string;
  containerClassName?: string;
  closeBtnClassName?: string;
};

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  closeModal,
  children,
  modalClassName = '',
  dialogClassName = '',
  overlayClassName = '',
  containerClassName = '',
  closeBtnClassName = '',
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={cn('relative z-10', dialogClassName)}
        onClose={closeModal}
      >
        <TransitionChild
          as={Fragment}
          enter="transition duration-200 ease-out"
          enterFrom="transform scale-100 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-100 opacity-0"
        >
          <div className="fixed inset-0 z-30 bg-ui_overlay" />
        </TransitionChild>

        <div
          className={cn('fixed inset-0 overflow-y-auto z-30', overlayClassName)}
        >
          <div className="flex min-h-full text-center">
            <TransitionChild
              as={Fragment}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <DialogPanel className={modalClassName}>
                <div className={cn('relative h-full', containerClassName)}>
                  {children}
                  <button
                    onClick={closeModal}
                    className={cn(
                      'w-[50px] h-[50px] absolute flex items-center justify-center',
                      closeBtnClassName,
                    )}
                  >
                    <ICONS.CLOSE className="w-4 h-4 fill-ui_accent" />
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
