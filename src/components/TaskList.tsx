import React from "react";
import { TaskItem } from "./TaskItem";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { getTasks as getTasksFromState } from "../store/selectors/getTasks";
import { Task } from "../types/Task";
import { DEFAULT_FILTER } from "../constants/defaultFilterValue";

type ItemsList = React.ReactNode;

export const TaskList = () => {
  const tasks = useTypedSelector(getTasksFromState);
  const filter = useTypedSelector((state) => state.tasksFilter);

  const { toggleTaskAction, delTaskAction } = useActions();

  const filteredTasks = (tag: string) => {
    if (tag !== DEFAULT_FILTER) {
      return [...tasks].filter((task) => task.tag === tag);
    } else {
      return tasks;
    }
  };

  let listItems: ItemsList = null;

  if (tasks.length > 0) {
    listItems = filteredTasks(filter).map((task: Task) => (
      <li className="tasks-list__item" key={task.id}>
        <TaskItem
          name={task.name}
          tag={task.tag}
          done={task.done}
          id={task.id}
          onDoneTask={toggleTaskAction}
          onDeleteTask={delTaskAction}
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
