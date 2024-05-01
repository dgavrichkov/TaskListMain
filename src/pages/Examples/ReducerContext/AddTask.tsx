import { useContext, useState } from 'react';
import { TasksDispatchContext } from './TasksContext';

type TAddTaskProps = {
  onAddTask: (text: string) => void;
}

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  
  return (
    <div style={{padding: '10px 0'}}>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        });
      }}>Add</button>
    </div>
  )
}
