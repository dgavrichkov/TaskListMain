import cn from 'classnames';
import { InputValidatorType } from '../model';
import { Styled } from './styled';
import { ForwardedRef, forwardRef } from 'react';

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
      <Styled.Field className="text-field">
        <label className="text-field__title" htmlFor={id}>
          {title}
        </label>
        {tag === 'input' ? (
          <input {...baseProps} ref={ref as ForwardedRef<HTMLInputElement>} type={type} />
        ) : (
          <textarea {...baseProps} ref={ref as ForwardedRef<HTMLTextAreaElement>}></textarea>
        )}
        <i className="text-field__message">
          {state.isDirty && state.validator.isValid.isError
            ? state.validator.isValid.message
            : null}
        </i>
      </Styled.Field>
    );
  },
);
