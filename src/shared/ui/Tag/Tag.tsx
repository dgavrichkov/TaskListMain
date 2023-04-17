import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { Styled } from "./styled";

type TTagProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  isActive?: boolean;
};

export const Tag: FC<TTagProps> = ({children, onClick, isActive = false}) => {
  return (
    <Styled.Tag
      onClick={onClick}
      type="button"
      isActive={isActive}
    >
      {children}
    </Styled.Tag>
  )
}
