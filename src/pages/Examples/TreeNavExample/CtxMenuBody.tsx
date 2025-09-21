import { Card, CardContent } from '@/shared/ui/Card';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CtxMenuBody = ({ children }: Props) => {
  return (
    <Card className="p-1">
      <CardContent className="p-1">{children}</CardContent>
    </Card>
  );
};
