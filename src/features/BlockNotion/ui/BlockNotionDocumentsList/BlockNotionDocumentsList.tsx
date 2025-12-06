import { Card, CardContent } from '@/shared/ui/Card';
import { useDocumentsListQuery } from '../../hooks/useDocumentsListQuery';
import { Button } from '@/shared/ui';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/Dialog';
import { BlockNotionDocument } from '../BlockNotionDocument/BlockNotionDocument';
import { useState } from 'react';

const queryKey = ['Documents'];

export const BlockNotionDocumentsList = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data, status } = useDocumentsListQuery(queryKey);

  if (status === 'pending') {
    return 'loading...';
  }

  if (status === 'error') {
    return 'error ;(';
  }

  const handleOpen = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setSelectedId(null);
    }
  };

  return (
    <article>
      <ul className="grid gap-2">
        {data?.map((document) => (
          <li key={document.id}>
            <Card>
              <CardContent className="flex justify-between">
                <div>
                  {document.title}
                  <div>
                    <span>{document.updatedAt}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={() => handleOpen(document.id)}>
                  Open
                </Button>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Редактирование документа</DialogTitle>
          </DialogHeader>

          {selectedId && <BlockNotionDocument documentId={selectedId} />}
        </DialogContent>
      </Dialog>
    </article>
  );
};
