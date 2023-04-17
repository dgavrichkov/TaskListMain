import styled, { css } from "styled-components";

type TTagProps = {
  isActive: boolean;
}

const Tag = styled.button<TTagProps>`
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;

  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.button || `0 0 0 3px #000`};
  background: ${(props) => props.theme.colors.primary || `#000`};
  color: ${(props) => props.theme.colors.text || `#000`};
  padding: 4px 8px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: ${(props) => props.theme.shadows.buttonInset};
  }

  ${(props) => props.isActive && css`
    border: 1px solid ${props.theme.colors.accent};
  `}
`;

export const Styled = {Tag}
