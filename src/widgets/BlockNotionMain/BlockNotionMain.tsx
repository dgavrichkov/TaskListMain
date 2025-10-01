import { Card, CardContent, CardHeader } from '@/shared/ui/Card';
import { BlockNotionDocument } from '@/features/BlockNotion/ui/BlockNotionDocument';

export const BlockNotionMain = () => {
  return (
    <Card>
      <CardHeader className="font-bold">
        <h2>БлокНоды с основного эндпоинта</h2>
      </CardHeader>
      <CardContent>
        <BlockNotionDocument documentId="1" />
      </CardContent>
    </Card>
  );
};
