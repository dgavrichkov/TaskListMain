import styled from "styled-components";

export const StyledListPageWrap = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto;
  align-content: start;
  gap: 20px;

  .title {
    grid-column: 1 / -1;
  }
  .form {
    grid-column: 1 / -1;
  }
  .aside {
    grid-column: 1 / 2;
    align-self: start;
    display: grid;
    gap: 20px;
  }
  .content {
    grid-column: 2 / -1;
  }
`
