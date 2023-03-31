import styled from "styled-components";

const Field = styled.div`
  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 10px 25px;
    font-size: 18px;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadows.input};
    color: inherit;

    &.invalid {
      outline: 1px solid ${(props) => props.theme.colors.error};
    }
  }

  textarea {
    resize: none;
  }

  label {
    display: block;
    margin-bottom: 4px;
    margin-left: 25px;
  }
`;

export const Styled = {Field};
