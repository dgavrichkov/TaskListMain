import { useForm } from '@tanstack/react-form';
import { Input } from '@/shared/ui/Input';
import { Check, CircleX } from 'lucide-react';
import { Button } from '@/shared/ui';

type TProps = {
  documentId: string;
  // TODO - extend it
  onConfirm: (payload: string) => void;
  onCancel: () => void;
  data?: string;
};

export const BlockNodeForm = ({ documentId, data, onConfirm, onCancel }: TProps) => {
  const { Field, handleSubmit, reset } = useForm({
    defaultValues: {
      textInput: data || '',
    },
    onSubmit: ({ value }) => {
      onConfirm?.(value.textInput);
      reset();
    },
  });

  const handleConfirmCreation = () => {
    handleSubmit();
  };

  const handleCancelCreation = () => {
    onCancel?.();
  };

  return (
    <>
      <div className="flex gap-2">
        <Field name="textInput">
          {({ state, handleChange }) => (
            <Input
              className="input input-bordered w-full"
              placeholder="введите ваш текст"
              type="text"
              value={state.value}
              onChange={(e) => handleChange(e.target.value)}
            />
          )}
        </Field>
        <Button
          className="cursor-pointer"
          size="icon"
          title="confirm"
          variant={'outline'}
          onClick={handleConfirmCreation}
        >
          <Check />
        </Button>
        <Button
          className="cursor-pointer"
          size="icon"
          title="cancel"
          variant={'destructive'}
          onClick={handleCancelCreation}
        >
          <CircleX />
        </Button>
      </div>
    </>
  );
};
