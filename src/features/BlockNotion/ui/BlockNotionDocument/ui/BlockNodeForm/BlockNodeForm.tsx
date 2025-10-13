import { useForm } from '@tanstack/react-form';
import { Input } from '@/shared/ui/Input';
import { Check, CircleX } from 'lucide-react';
import { Button } from '@/shared/ui';
import { useCallback, useEffect, useRef } from 'react';

type TProps = {
  documentId: string;
  // TODO - extend it
  onConfirm: (payload: string) => void;
  onCancel: () => void;
  data?: string;
};

export const BlockNodeForm = ({ documentId, data, onConfirm, onCancel }: TProps) => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const { Field, handleSubmit, reset } = useForm({
    defaultValues: {
      textInput: data || '',
    },
    onSubmit: ({ value }) => {
      onConfirm?.(value.textInput);
      reset();
    },
  });

  const handleConfirmCreation = useCallback(() => {
    handleSubmit();
  }, [handleSubmit]);

  const handleCancelCreation = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    // закрытие по Esc
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCancelCreation();
      }

      if (e.key === 'Enter') {
        handleConfirmCreation();
      }
    };

    // обработка внешнего клика
    const handlePointerDown = (e: PointerEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        handleCancelCreation();
      }
    };

    window.addEventListener('keydown', handleKey, { signal });
    window.addEventListener('pointerdown', handlePointerDown, { signal });

    return () => {
      controller.abort();
    };
  }, [handleCancelCreation, handleConfirmCreation]);

  return (
    <div className="flex gap-2" ref={formRef}>
      <Field name="textInput">
        {({ state, handleChange }) => (
          <Input
            autoFocus={true}
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
  );
};
