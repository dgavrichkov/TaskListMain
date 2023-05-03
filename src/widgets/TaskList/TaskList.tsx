import React, { FC } from 'react';
import styled from 'styled-components';
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
    <StyledList>
      {filteredTasks.length > 0
        ? filteredTasks.map((task: TTask) => (
            <li className="tasks-list__item" key={task.id}>
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
    </StyledList>
  );
};

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
