import {
  ValidationErrors,
  ValidationPriorities,
} from "../types/ValidationTypes";

export const VALIDATION_PRIORITIES: ValidationPriorities = {
  isRequired: 1,
  minLength: 2,
  maxLength: 3,
};

export const VALIDATION_ERRORS: ValidationErrors = {
  isRequired: () => "Поле не заполнено",
  minLength: (value) => `Минимальная длина - ${value}`,
  maxLength: (value) => `Максимальная длина - ${value}`,
};
export const VALIDATION_SUCCESS = {
  commonFieldSuccess: "Поле заполнено верно",
  allSuccess: "Нет ошибок валидации",
};
