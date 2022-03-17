import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 30px;
  label {
    font-size: 12px;
    margin-bottom: -10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  input,
  textarea {
    grid-column: span 4;
    display: block;
    border: none;
    border-radius: 20px;
    padding: 10px 25px;
    font-size: 18px;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadows.input};
    color: inherit;
  }
  textarea {
    resize: none;
  }
  button {
    grid-column: span 2;
  }
`;
