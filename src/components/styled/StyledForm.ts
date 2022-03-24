import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 30px;
  input,
  textarea {
    grid-column: span 4;
    display: block;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 10px 25px;
    font-size: 18px;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadows.input};
    color: inherit;

    /* invalid styles */
    &.invalid {
      outline: 1px solid red;
      /* border-color: red; */
    }
  }
  textarea {
    resize: none;
  }
  button {
    grid-column: span 2;
  }

  .text-field {
    grid-column: span 4;
  }
`;
