import styled from "styled-components";

const Wrap = styled.div`
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.pale};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  svg {
    width: 75%;
    height: 75%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Styled = { Wrap };
