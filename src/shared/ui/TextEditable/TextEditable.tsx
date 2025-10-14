import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  value: string;
  onConfirm: (next: string) => void;
  onStart: () => void;
  onCancel: () => void;
};

// Наработки по отрисовке редактируемого текста, типа как в ноушне
export const TextEditable = ({ value, onCancel, onConfirm, onStart }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState(value);

  // Синхронизируем внешнее value -> внутрь (если пришло обновление извне)
  useEffect(() => {
    setDraft(value);
    if (ref.current && ref.current.textContent !== value) {
      ref.current.textContent = value;
    }
  }, [value]);

  const handleFinish = () => {
    const next = (ref.current?.textContent ?? '').trimEnd();

    if (next !== value) onConfirm(next);
  };

  const handleInput = () => {
    setDraft(ref.current?.textContent ?? '');
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // не вставлять \n
      handleFinish();
      // по желанию можно снять фокус:
      ref.current?.blur();
    } else if (e.key === 'Escape') {
      // отмена: откатываем текст и завершаем без handleEdit
      e.preventDefault();
      if (ref.current) ref.current.textContent = value;
      setDraft(value);
      onCancel();
      ref.current?.blur();
    }
  };

  const onPaste: React.ClipboardEventHandler<HTMLDivElement> = (e) => {
    // Вставляем только обычный текст (без html-форматирования)
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      aria-multiline="true"
      ref={ref}
      role="textbox"
      style={{
        outline: 'none',
        minHeight: '1.5em',
        whiteSpace: 'pre-wrap',
      }}
      onBlur={handleFinish}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    >
      {value}
    </div>
  );
};
