import { Card, CardContent, CardHeader } from '@/shared/ui/Card';
import { BlockNotionDocumentsList } from '@/features/BlockNotion/ui/BlockNotionDocumentsList';

export const BlockNotionMain = () => (
  <Card>
    <CardHeader className="font-bold">
      <h2>Список документов</h2>
    </CardHeader>
    <CardContent>
      <BlockNotionDocumentsList />
    </CardContent>
  </Card>
);
