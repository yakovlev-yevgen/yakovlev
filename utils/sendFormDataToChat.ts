import axios from 'axios';
import React from 'react';

import { FormInputsType } from '@/components/modules/Form';

const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}`;

type SendArgsType = {
  data: FormInputsType;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  reset: () => void;
};

export const sendFormDataToChat = async ({
  data,
  setIsError,
  setIsSuccess,
  reset,
}: SendArgsType): Promise<void> => {
  const { name, phone, message } = data;
  const text = `Имя: ${name}\nТелефон: +${phone}\nСообщение: ${message}`;

  return await axios
    .post(URL_API, {
      text,
      parse_mod: 'html',
    })
    .then(() => {
      reset();
    })
    .then(() => {
      setTimeout(() => {
        setIsSuccess(true);
      }, 0);
    })
    .catch(error => {
      console.log(error.response.data);

      setIsError(true);
    });
};
