import { Button } from "../../shared/ui";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TTask, selectCategoryById } from '../../entities';
import { useAppSelector } from '../../app/store';

type TaskProps = TTask & {
  onDoneTask: () => void;
  onDeleteTask: () => void;
};

type StyledWrapProps = {
  className: string;
  done: boolean;
};

export const Task = ({
  name,
  categoryID,
  id,
  done,
  onDoneTask,
  onDeleteTask,
}: TaskProps) => {
  const category = useAppSelector(selectCategoryById(categoryID));

  return (
    <StyledTaskItem className={`task-item`} done={done}>
      <b className="name">{name}</b>
      <i className="category">{category?.title}</i>
      <NavLink to={id}>Открыть</NavLink>
      <Button
        buttonType="button"
        className="done"
        onClick={onDoneTask}
      >
        {!done ? "Done" : "Not Done"}
      </Button>
      <Button
        buttonType="button"
        className="delete"
        onClick={onDeleteTask}
      >
        Delete
      </Button>
    </StyledTaskItem>
  );
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

  .category {
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
