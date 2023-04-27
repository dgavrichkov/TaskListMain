import styled from 'styled-components';

const Page = styled.div`
  max-width: 964px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 32px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  .header {
    grid-column: 1 / -1;
  }
  .main {
    grid-column: 1 / -1;
  }

  .footer {
    grid-column: 1 / -1;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Styled = { Page };
