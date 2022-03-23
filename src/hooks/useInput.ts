import React, { useState } from "react";

export const useInput = (
  initialValue: string,
  validationSettings?: Validations
) => {
  const [value, setValue] = useState<string>(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const validations = validator(value, validationSettings);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    validations,
  };
};

type Validations = {
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
};

type ValidationEntry = { isError: boolean; message: string };

type ValidationResult = {
  [key: string]: ValidationEntry;
};

const validator = (
  value: string,
  validationSettings?: Validations
): { [key: string]: ValidationEntry | boolean } => {
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
