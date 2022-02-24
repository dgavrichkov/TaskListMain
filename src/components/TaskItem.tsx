import { Button } from "./Button";
import styled from "styled-components";
import { Task } from "../types/Task";

type TaskProps = {
  name: string;
  tag: string;
  id: string;
  done: boolean;
  onDoneTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
};

type StyledWrapProps = {
  className: string;
  done: boolean;
};

const StyledTaskItem = styled.div<StyledWrapProps>`
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.button};
  padding: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;
  column-gap: 14px;
  border: 1px solid transparent;

  & > .name {
    display: block;
    grid-column: 1 / -1;
  }

  .tag {
    display: block;
    grid-column: 1;
    grid-row: 2;
  }

  .done {
    grid-row: 3;
    grid-column: 1;
  }

  .delete {
    grid-column: 2;
    grid-row: 3;
  }

  ${(props) =>
    props.done &&
    `
      box-shadow: ${props.theme.shadows.buttonInset}
      opacity: 0.5;
      .name {
        text-decoration: line-through;
        opacity: 0.6;
      }
  `}
`;

export const TaskItem = ({
  name,
  tag,
  id,
  done,
  onDoneTask,
  onDeleteTask
}: TaskProps) => {
  return (
    <StyledTaskItem className={`task-item`} done={done}>
      <b className="name">{name}</b>
      <i className="tag">{tag}</i>
      <Button
        buttonType="button"
        className="done"
        onClick={() => {
          onDoneTask({id, name, tag, done});
        }}
      >
        {!done ? "Done" : "Not Done"}
      </Button>
      <Button
        buttonType="button"
        className="delete"
        onClick={() => {
          onDeleteTask(id);
        }}
      >
        Delete
      </Button>
    </StyledTaskItem>
  );
};
