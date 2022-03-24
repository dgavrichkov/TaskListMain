import React, { useState } from "react";

export const useInput = (
  initialValue: string,
  validationSettings?: Validations
): InputValidatorType => {
  const [value, setValue] = useState<string>(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const validator = useValidator(value, validationSettings);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  const clearInput = () => {
    setValue("");
    setIsDirty(false);
  };

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    clearInput,
    validator,
  };
};

export type InputValidatorType = {
  value: string;
  isDirty: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: () => void;
  clearInput: () => void;
  validator: Validator;
};

export type Validations = {
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
};

type ValidationEntry = { isError: boolean; message: string };

type ValidationResult = {
  [key: string]: ValidationEntry;
};

export type Validator = {
  [key: string]: ValidationResult | boolean;
};

const useValidator = (
  value: string,
  validationSettings?: Validations
): Validator => {
  if (!validationSettings) {
    return {
      isValid: true,
    };
  }
  const resultValids: ValidationResult = {};
  let isValid = false;

  for (const [validation, validationValue] of Object.entries(
    validationSettings
  )) {
    switch (validation) {
      case "isRequired":
        if (value) {
          resultValids.isRequired = {
            isError: false,
            message: "Поле заполнено верно",
          };
        } else {
          resultValids.isRequired = {
            isError: true,
            message: "Поле не заполнено",
          };
        }
        break;
      case "minLength":
        if (value.length < validationValue) {
          resultValids.minLenght = {
            isError: true,
            message: `Минимальная длина - ${validationValue}`,
          };
        } else {
          resultValids.minLenght = {
            isError: false,
            message: "Поле заполнено верно",
          };
        }
        break;
      case "maxLength":
        if (value.length > validationValue) {
          resultValids.maxLenght = {
            isError: true,
            message: `Максимальная длина - ${validationValue}`,
          };
        } else {
          resultValids.maxLenght = {
            isError: false,
            message: "Поле заполнено верно",
          };
        }
    }
  }

  for (const validationValue of Object.values(resultValids)) {
    if (validationValue.isError) {
      isValid = false;
    } else {
      isValid = true;
    }
  }

  return {
    ...resultValids,
    isValid,
  };
};
