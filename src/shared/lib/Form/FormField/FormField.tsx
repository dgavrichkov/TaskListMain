import cn from 'classnames';
import { InputValidatorType } from '../model';
import { ForwardedRef, forwardRef } from 'react';

import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';

type TFormFieldProps = {
  id: string;
  title: string;
  state: InputValidatorType;
  tag?: 'input' | 'textarea';
  name?: string;
  type?: string;
  placeholder?: string;
};

export const FormField = forwardRef(
  ({ state, id, name, type = 'text', title, tag = 'input', placeholder }: TFormFieldProps, ref) => {
    const baseProps = {
      id,
      name,
      placeholder,
      value: state.value,
      onBlur: state.onBlur,
      onChange: state.onChange,
      className: cn({
        invalid: state.isDirty && state.validator.isValid.isError,
      }),
    };

    return (
      <div className="text-field">
        <label className="text-field__title" htmlFor={id}>
          {title}
        </label>
        {tag === 'input' ? (
          <Input {...baseProps} ref={ref as ForwardedRef<HTMLInputElement>} type={type} />
        ) : (
          <Textarea {...baseProps} ref={ref as ForwardedRef<HTMLTextAreaElement>}></Textarea>
        )}
        <i className="text-field__message">
          {state.isDirty && state.validator.isValid.isError
            ? state.validator.isValid.message
            : null}
        </i>
      </div>
    );
  },
);
