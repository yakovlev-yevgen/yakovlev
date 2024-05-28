import * as Yup from 'yup';

const nameRegexp =
  /^[а-яА-Яa-zA-ZіІїЇґҐєЄ]+(([ʼ’'` -][а-яА-Яa-zA-ZіІїЇґҐєЄ ])?[а-яА-Яa-zA-ZіІїЇґҐєЄ]*)*$/;
const phoneRegexp = /^\d{10,13}$/;

export const formValidationSchema = () =>
  Yup.object({
    name: Yup.string()
      .trim()
      .required('Поле обязательно для заполнения')
      .min(2, 'Имя должно содержать не меньше 2 символов')
      .max(30, 'Имя должно содержать не больше 30 символов')
      .matches(nameRegexp, 'Неверный формат ввода'),

    phone: Yup.string()
      .required('Поле обязательно для заполнения')
      .test(
        'phone',
        'Телефон должен содержать от 10 до 13 цифр',
        (value: string) => {
          const digitsOnly = value ? value.replace(/\D/g, '') : '';
          return phoneRegexp.test(digitsOnly);
        },
      ),

    message: Yup.string()
      .trim()
      .required('Поле обязательно для заполнения')
      .min(3, 'Сообщение должно содержать не меньше 3 символов')
      .max(500, 'Сообщение должно содержать не больше 500 символов'),
  }).required();
