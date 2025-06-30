import { Card, CardContent } from '@/shared/shadcn/ui/card';
import { PropsWithChildren } from 'react';

export const Panel = ({ children }: PropsWithChildren) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
