import { useContext, useState } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext';
import { TTask } from './types';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui';

export default function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <ul style={{ marginLeft: 14 }}>
      {tasks &&
        tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
    </ul>
  );
}

type TTaskProps = {
  task: TTask;
};

function Task({ task }: TTaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <Input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <Button onClick={() => setIsEditing(false)}>Save</Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </>
    );
  }

  return (
    <label style={{ display: 'block', margin: '5px 0' }}>
      <input
        checked={task.done}
        type="checkbox"
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <Button
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id,
          });
        }}
      >
        Delete
      </Button>
    </label>
  );
}
