import React, { useState } from "react";
import {
  VALIDATION_ERRORS,
  VALIDATION_PRIORITIES,
  VALIDATION_PROPERTIES,
  VALIDATION_SUCCESS,
} from "../constants/validationConstants";
import {
  InputValidatorType,
  ValidationResult,
  Validations,
} from "../types/ValidationTypes";

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

const useValidator = (
  value: string,
  validationSettings?: Validations
): ValidationResult => {
  if (!validationSettings) {
    return {
      isValid: { isError: false, message: VALIDATION_SUCCESS.allSuccess },
    };
  }
  const resultValids: ValidationResult = {};
  let isValid = { isError: true, message: "default message" };

  for (const [validation, validationValue] of Object.entries(
    validationSettings
  )) {
    switch (validation) {
      case VALIDATION_PROPERTIES.IS_REQUIRED:
        if (value) {
          resultValids[VALIDATION_PROPERTIES.IS_REQUIRED] = {
            isError: false,
            message: VALIDATION_SUCCESS.commonFieldSuccess,
          };
        } else {
          resultValids[VALIDATION_PROPERTIES.IS_REQUIRED] = {
            isError: true,
            message: VALIDATION_ERRORS[VALIDATION_PROPERTIES.IS_REQUIRED](),
          };
        }
        break;
      case VALIDATION_PROPERTIES.MIN_LEN:
        if (value.length < validationValue) {
          resultValids[VALIDATION_PROPERTIES.MIN_LEN] = {
            isError: true,
            message:
              VALIDATION_ERRORS[VALIDATION_PROPERTIES.MIN_LEN](validationValue),
          };
        } else {
          resultValids[VALIDATION_PROPERTIES.MIN_LEN] = {
            isError: false,
            message: VALIDATION_SUCCESS.commonFieldSuccess,
          };
        }
        break;
      case VALIDATION_PROPERTIES.MAX_LEN:
        if (value.length > validationValue) {
          resultValids[VALIDATION_PROPERTIES.MAX_LEN] = {
            isError: true,
            message:
              VALIDATION_ERRORS[VALIDATION_PROPERTIES.MAX_LEN](validationValue),
          };
        } else {
          resultValids[VALIDATION_PROPERTIES.MAX_LEN] = {
            isError: false,
            message: VALIDATION_SUCCESS.commonFieldSuccess,
          };
        }
        break;
    }
  }

  isValid.isError = Object.values(resultValids).some(
    (validation) => validation.isError === true
  );

  if (!isValid.isError) {
    isValid.message = VALIDATION_SUCCESS.allSuccess;
  } else {
    isValid.message = getPriorityError(resultValids);
  }

  return {
    ...resultValids,
    isValid,
  };
};

function getPriorityError(validations: ValidationResult): string {
  const failedValidations = Object.entries(validations).filter(
    (entry) => entry[1].isError === true
  );

  const validationsWithPriority = failedValidations.map((entry) => {
    const [key, validation] = entry;
    return {
      key,
      priority: VALIDATION_PRIORITIES[key],
      message: validation.message,
    };
  });

  if (validationsWithPriority.length === 1) {
    return validationsWithPriority[0].message;
  }

  validationsWithPriority.sort((a, b) => {
    if (a.priority > b.priority) {
      return 1;
    }
    if (a.priority < b.priority) {
      return -1;
    }
    return 0;
  });

  return validationsWithPriority[0].message;
}
