import { useContext, useState } from 'react';
import { TasksDispatchContext } from './TasksContext';
import { Button } from '@/shared/ui';
import { Input } from '@/shared/ui/Input';

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);

  return (
    <div className="flex gap-2">
      <Input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <Button
        onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </Button>
    </div>
  );
}
