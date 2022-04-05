export type InputValidatorType = {
  value: string;
  isDirty: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: () => void;
  clearInput: () => void;
  validator: ValidationResult;
};

export type Validations = {
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
};

export type ValidationEntry = {
  isError: boolean;
  message: string;
};

export type ValidationResult = {
  [key: string]: ValidationEntry;
};

export type ValidationErrors = {
  [key: string]: (value?: number | boolean) => string;
};

export type ValidationPriorities = {
  [key: string]: number;
};

export type FormConfig = {
  [key: string]: InputConfig;
};

export type InputConfig = {
  initialValue: string;
  validationSettings?: Validations;
};

export type ValidationForm = {
  inputs: {
    [key: string]: InputValidatorType;
  };
  formValidity: boolean;
};
