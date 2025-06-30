import React, { FC } from 'react';
import { Task } from '../Task/Task';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { TTask, deleteTask, toggleTask } from '../../entities';

export const TaskList: FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) =>
    state.tasks.idList.map((id: string) => state.tasks.data[id]),
  );
  const filter = useAppSelector((state) => state.filter.tasks);
  const filteredTasks =
    filter.length > 0 ? tasks.filter((task) => filter.includes(task.categoryID)) : tasks;

  return (
    <ul className="flex flex-col gap-4">
      {filteredTasks.length > 0
        ? filteredTasks.map((task: TTask) => (
            <li key={task.id}>
              <Task
                categoryID={task.categoryID}
                done={task.done}
                id={task.id}
                name={task.name}
                onDeleteTask={() => dispatch(deleteTask(task.id))}
                onDoneTask={() => dispatch(toggleTask(task.id))}
              />
            </li>
          ))
        : 'No tasks'}
    </ul>
  );
};
