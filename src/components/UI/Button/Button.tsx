import styled from "styled-components";
import cn from "classnames";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  variant?:
    | "standart"
    | "primary"
    | "secondary"
    | "subtle"
    | "text"
    | undefined;
  onClick: () => void;
};

export const Button = ({
  children,
  className,
  buttonType = "button",
  disabled,
  variant = "standart",
  onClick,
}: ButtonProps) => {
  const classes = cn([className, variant]);

  return (
    <StyledButton
      className={classes}
      type={buttonType}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  padding: 12px 18px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.button || `0 0 0 3px #000`};
  background: ${(props) => props.theme.colors.primary || `#000`};
  color: ${(props) => props.theme.colors.text || `#eee`};
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

  &.primary {
    &[disabled] {
    }
    &:hover {
    }
    &:active {
    }
  }
  &.secondary {
    &[disabled] {
    }
    &:hover {
    }
    &:active {
    }
  }
  &.subtle {
    &[disabled] {
    }
    &:hover {
    }
    &:active {
    }
  }
  &.text {
    &[disabled] {
    }
    &:hover {
    }
    &:active {
    }
  }
`;
