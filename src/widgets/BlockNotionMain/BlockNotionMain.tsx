import { Card, CardContent, CardHeader } from '@/shared/ui/Card';
import { BlockNotionDocumentsList } from '@/features/BlockNotion/ui/BlockNotionDocumentsList';
import { Suspense } from 'react';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';

export const BlockNotionMain = () => (
  <Card>
    <CardHeader className="font-bold">
      <h2>Список документов</h2>
    </CardHeader>
    <CardContent>
      <ErrorBoundary fallback={<div>Error on Fetching Documents</div>}>
        <Suspense fallback={<div>Suspensed Loading...</div>}>
          <BlockNotionDocumentsList />
        </Suspense>
      </ErrorBoundary>
    </CardContent>
  </Card>
);
