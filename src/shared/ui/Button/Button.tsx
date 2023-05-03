import { FC } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick: () => void;
  isBold?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  buttonType = 'button',
  disabled,
  onClick,
  isBold = false,
}) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      isBold={isBold}
      type={buttonType}
      onClick={() => onClick()}
    >
      {children}
    </StyledButton>
  );
};

type TStyledButtonProps = {
  isBold: boolean;
};

const StyledButton = styled.button<TStyledButtonProps>`
  padding: 12px 18px;
  border-radius: 20.3736px;
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.button || `0 0 0 3px #000`};
  background: ${(props) => props.theme.colors.primary || `#000`};
  color: ${(props) => props.theme.colors.text || `#000`};

  ${(props) =>
    props.isBold &&
    css`
      font-weight: 700;
    `}

  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: ${(props) => props.theme.shadows.buttonInset};
  }

  &[disabled] {
    box-shadow: ${(props) => props.theme.shadows.buttonInset};
    color: ${(props) => props.theme.colors.pale};
    pointer-events: none;
  }
`;
