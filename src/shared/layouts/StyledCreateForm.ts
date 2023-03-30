import styled from "styled-components";

export const StyledCreateForm = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 30px;

  input,
  textarea {
    grid-column: span 4;
  }

  button {
    grid-column: span 2;
  }

  .text-field {
    grid-column: span 4;
  }
`;
