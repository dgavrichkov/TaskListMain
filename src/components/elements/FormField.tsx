import styled from "styled-components";
import { InputValidatorType } from "../../hooks/useInput";

type FormFieldType = {
  id: string;
  name?: string;
  title: string;
  tag: "input" | "textarea";
  type?: string;
  placeholder?: string;
  state: InputValidatorType;
};

export const FormField = ({
  state,
  id,
  name,
  type,
  title,
  tag,
  placeholder,
}: FormFieldType) => {
  return (
    <StyledWrap className="text-field">
      <label className="text-field__title" htmlFor={id}>
        {title}
      </label>
      {tag === "input" ? (
        <input
          className={state.isDirty && !state.validator.isValid ? "invalid" : ""}
          value={state.value}
          type={type}
          id={id}
          name={name}
          onBlur={state.onBlur}
          onChange={state.onChange}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          className={state.isDirty && !state.validator.isValid ? "invalid" : ""}
          value={state.value}
          id={id}
          name={name}
          onBlur={state.onBlur}
          onChange={state.onChange}
          placeholder={placeholder}
        ></textarea>
      )}
      <i className="text-field__message"></i>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  input,
  textarea {
    display: block;
    width: 100%;
  }
  label {
    display: block;
    margin-bottom: 4px;
    margin-left: 25px;
  }
`;
