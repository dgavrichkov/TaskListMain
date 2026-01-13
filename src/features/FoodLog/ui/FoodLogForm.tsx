import { useState } from 'react';
import { useCreateFoodEntry } from '../application/adapters/useCreateFoodEntry';

function toDatetimeLocalValue(ts: number) {
  return new Date(ts).toISOString().slice(0, 16);
}

function fromDatetimeLocalValue(value: string) {
  return new Date(value).getTime();
}

export const FoodLogForm = () => {
  const [text, setText] = useState('');
  const [eatenAt, setEatenAt] = useState(toDatetimeLocalValue(Date.now()));
  const create = useCreateFoodEntry();

  const submit = () => {
    create.mutate({
      text,
      eatenAt: fromDatetimeLocalValue(eatenAt),
    });
    setText('');
  };

  return (
    <div className="space-y-2">
      <input
        className="border rounded p-2"
        type="datetime-local"
        value={eatenAt}
        onChange={(e) => setEatenAt(e.target.value)}
      />
      <textarea
        className="w-full border rounded p-2"
        placeholder="Что ты ел?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={create.isPending} onClick={submit}>
        Сохранить
      </button>
    </div>
  );
};
