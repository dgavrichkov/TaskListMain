import {
  FormConfig,
  InputValidatorType,
  ValidationForm,
} from "../types/ValidationTypes";

export const useForm = (config: FormConfig): ValidationForm => {
  let inputs: { [key: string]: InputValidatorType } = {};

  return {
    inputs,
    formValidity: true,
  };
};
