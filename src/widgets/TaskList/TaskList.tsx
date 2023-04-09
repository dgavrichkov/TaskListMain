import React from "react";
import { Task } from "../Task/Task";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from '../../app/store';
import { TTask, deleteTask, toggleTask } from '../../entities';

type ItemsList = React.ReactNode;

export const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.tasks.idList.map((id: string) => state.tasks.data[id]));
  let listItems: ItemsList = null;

  if (tasks.length > 0) {
    listItems = tasks.map((task: TTask) => (
      <li className="tasks-list__item" key={task.id}>
        <Task
          name={task.name}
          category={task.category}
          done={task.done}
          id={task.id}
          onDoneTask={() => dispatch(toggleTask(task.id))}
          onDeleteTask={() => dispatch(deleteTask(task.id))}
        />
      </li>
    ));
  } else {
    listItems = "Задач нет";
  }

  return <StyledList>{listItems}</StyledList>;
};

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
