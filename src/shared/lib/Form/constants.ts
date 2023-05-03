import { ValidationErrors, ValidationPriorities } from './model';

// eslint-disable-next-line no-unused-vars
export enum VALIDATION_PROPERTIES {
  IS_REQUIRED = 'isRequired', // eslint-disable-line no-unused-vars
  MIN_LEN = 'minLength', // eslint-disable-line no-unused-vars
  MAX_LEN = 'maxLenght', // eslint-disable-line no-unused-vars
}

export const VALIDATION_PRIORITIES: ValidationPriorities = {
  isRequired: 1,
  minLength: 2,
  maxLength: 3,
};

export const VALIDATION_ERRORS: ValidationErrors = {
  [VALIDATION_PROPERTIES.IS_REQUIRED]: () => 'Поле не заполнено',
  [VALIDATION_PROPERTIES.MIN_LEN]: (value) => `Минимальная длина - ${value}`,
  [VALIDATION_PROPERTIES.MAX_LEN]: (value) => `Максимальная длина - ${value}`,
};

export const VALIDATION_SUCCESS = {
  commonFieldSuccess: 'Поле заполнено верно',
  allSuccess: 'Нет ошибок валидации',
};
