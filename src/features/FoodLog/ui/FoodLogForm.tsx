import { useState } from 'react';
import { useCreateFoodEntry } from '../application/adapters/useCreateFoodEntry';
import { Button } from '@/shared/ui/Button';

function toDatetimeLocalValue(ts: number) {
  const d = new Date(ts);

  // компенсируем timezone offset
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);

  return local.toISOString().slice(0, 16);
}

function fromDatetimeLocalValue(value: string) {
  return new Date(value).getTime();
}

export const FoodLogForm = () => {
  const [text, setText] = useState('');
  const [eatenAt, setEatenAt] = useState('');
  const create = useCreateFoodEntry();

  const submit = () => {
    create.mutate({
      text,
      eatenAt: fromDatetimeLocalValue(eatenAt) || Date.now(),
    });
    setText('');
  };

  return (
    <div className="space-y-2">
      <div>
        <input
          className="border rounded p-2"
          type="datetime-local"
          value={eatenAt}
          onChange={(e) => setEatenAt(e.target.value)}
        />
        <button
          onClick={() => {
            console.log(toDatetimeLocalValue(Date.now()));
            console.log(Date.now());
            setEatenAt(toDatetimeLocalValue(Date.now()));
          }}
        >
          now
        </button>
      </div>
      <textarea
        className="w-full border rounded p-2"
        placeholder="Что ты ел?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button disabled={create.isPending} onClick={submit}>
        Сохранить
      </Button>
    </div>
  );
};
