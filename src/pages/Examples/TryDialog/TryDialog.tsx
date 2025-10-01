import { Button } from '@/shared/ui';
import { Card } from '@/shared/ui/Card';
import { forwardRef, useRef, useState } from 'react';

const ModalContent1 = () => {
  return <div>ModalContent1</div>;
};
const ModalContent2 = () => {
  return <div>ModalContent2</div>;
};

type Props = {
  children: React.ReactNode;
  toggleDialog: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(({ children, toggleDialog }, ref) => {
  return (
    <dialog
      ref={ref}
      style={{
        background: 'transparent',
        margin: 'auto',
      }}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          toggleDialog();
        }
      }}
    >
      <Card className="p-4">
        {children}
        <Button onClick={toggleDialog}>Close</Button>
      </Card>
    </dialog>
  );
});

export const TryDialog = () => {
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button
          onClick={() => {
            setDialogContent(<ModalContent1 />);
            toggleDialog();
          }}
        >
          Dialog 1
        </Button>
        <Button
          onClick={() => {
            setDialogContent(<ModalContent2 />);
            toggleDialog();
          }}
        >
          Dialog 2
        </Button>
        <Dialog ref={dialogRef} toggleDialog={toggleDialog}>
          {dialogContent}
        </Dialog>
      </div>
    </div>
  );
};
