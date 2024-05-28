'use client';

import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';
import PhoneInput from 'react-phone-input-2';
import cn from 'classnames';

import 'react-phone-input-2/lib/bootstrap.css';
import ru from 'react-phone-input-2/lang/ru.json';

import { FormModal } from '@/components/modules/FormModal';
import { Button } from '@/components/ui-kit/Button';
import { formValidationSchema } from '@/utils/formValidationSchema';
import { sendFormDataToChat } from '@/utils/sendFormDataToChat';

import { formTxt, successModal, failedModal } from '@/data/feedbackForm.json';

export type FormInputsType = {
  name: string;
  phone: string;
  message: string;
};

export const Form = ({ className = '' }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const STORAGE_KEY = 'feedbackForm';
  const schema = formValidationSchema();

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormInputsType>({
    mode: 'onSubmit',
    shouldFocusError: false,
    resolver: yupResolver(schema),
  });

  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: typeof window !== 'undefined' ? localStorage : undefined,
  });

  const onSubmitHandler: SubmitHandler<FormInputsType> = async data => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    return await sendFormDataToChat({
      data,
      setIsError,
      setIsSuccess,
      reset,
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className={cn('font-ui_roboto text-ui_dark', className)}>
      <h3 className="m-auto mb-4 md:mb-[26px] xl:mb-4 text-center text-ui_reg_16 md:text-ui_reg_20 xl:text-ui_reg_24 whitespace-break-spaces">
        {formTxt.title}
      </h3>

      <p className="mb-1 md:mb-[10px] text-center text-ui_light_16 md:text-ui_light_20 whitespace-break-spaces">
        {formTxt.description}
      </p>

      <p className="mb-6 md:mb-5 text-center text-ui_light_14 md:text-ui_light_16">
        {formTxt.disclaimer}
      </p>

      <form
        className="flex flex-col gap-y-[35px] md:gap-y-[39px] mb-2 md:mb-4"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate={true}
      >
        <div className="relative">
          <input
            className={cn('field', {
              ['border-ui_red border-[1px]']: errors?.name,
            })}
            type="text"
            placeholder={formTxt.name}
            {...register('name')}
          />
          {errors?.name && <p className="error">{errors?.name?.message}</p>}
        </div>

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <PhoneInput
                country={'ru'}
                localization={ru}
                inputProps={{
                  className: 'field !pl-[106px]',
                  placeholder: '+7',
                }}
                {...field}
              />
              {errors?.phone && (
                <p className="error">{errors?.phone?.message}</p>
              )}
            </div>
          )}
        />

        <div className="relative h-min">
          <textarea
            className={cn(
              'field py-[18px] h-[150px] md:h-[181px] resize-none block',
              {
                ['border-ui_red border-[1px]']: errors?.message,
              },
            )}
            placeholder={formTxt.message}
            {...register('message')}
          />
          {errors?.message && (
            <p className="error">{errors?.message?.message}</p>
          )}
        </div>

        <Button
          className="mx-auto mt-[5px] md:mt-[-19px]"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && formTxt.submiting}
          {!isSubmitting && formTxt.submit}
        </Button>
      </form>

      <p className="smOnly:w-[290px] mx-auto pb-20 text-ui_light_14 md:text-ui_light_16 md:whitespace-break-spaces">
        {formTxt.agreement}
      </p>

      {isSuccess && !isSubmitting && (
        <FormModal
          isModalOpen={isSuccess}
          closeModal={() => setIsSuccess(false)}
          title={successModal.title}
          details={successModal.details}
        />
      )}

      {isError && !isSubmitting && (
        <FormModal
          isModalOpen={isError}
          closeModal={() => setIsError(false)}
          title={failedModal.title}
          details={failedModal.details}
        />
      )}
    </div>
  );
};
