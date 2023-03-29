import { InputValidatorType, ValidationForm } from "../../../types/ValidationTypes";

export const useForm = (...inputs: InputValidatorType[]): ValidationForm => {
  let validity = false;
  let touched = false;
  const invalidInput = inputs.find((input) => input.validator.isValid.isError);
  const touchedInput = inputs.find((input) => input.isDirty);

  if (invalidInput) {
    validity = false;
  } else {
    validity = true;
  }
  if (touchedInput) {
    touched = true;
  } else {
    touched = false;
  }

  return {
    validity,
    touched,
  };
};
