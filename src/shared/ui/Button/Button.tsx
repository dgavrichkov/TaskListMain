import styled from "styled-components";

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({
  children,
  className,
  buttonType = "button",
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      type={buttonType}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export const BoldButton = styled(Button)`
  font-weight: 700;
`;

const StyledButton = styled.button`
  padding: 12px 18px;
  border-radius: 20.3736px;
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.button || `0 0 0 3px #000`};
  background: ${(props) => props.theme.colors.primary || `#000`};
  color: ${(props) => props.theme.colors.text || `#000`};
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
