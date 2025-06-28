import { Button as TPButton } from '@/shared/shadcn/ui/button';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof TPButton>;

export const Button = (props: Props) => {
  return <TPButton {...props} />;
};

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick: () => void;
  isBold?: boolean;
};
