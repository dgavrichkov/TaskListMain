import styled from "styled-components";

type ButtonProps = {
  children?: React.ReactNode,
  className?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

export const Button = ({
  children,
  className,
  buttonType = "button",
  onClick
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      type={buttonType}
      onClick={() => onClick()}
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
  color: inherit;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: ${(props) => props.theme.shadows.buttonInset};
  }
`;