import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../shared/ui";
import { StyledDetailPageWrap } from "../../shared/layouts";
import { useAppDispatch, useAppSelector } from '../../app/store';
import { deleteTask, toggleTask } from '../../entities';

type ParamTypes = {
  taskId: string;
};

export const Task = () => {
  const dispatch = useAppDispatch();
  const { taskId } = useParams<ParamTypes>();
  const task = useAppSelector(state => state.tasks.data[taskId!]);
  const navigate = useNavigate();

  if (typeof task === "boolean") {
    return null;
  }

  const handleToggle = () => dispatch(toggleTask(task.id));
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    navigate("../tasks", { replace: true });
  }

  return (
    <StyledDetailPageWrap className={task.done === true ? "is-done" : ""}>
      <h3>{task.name}</h3>
      <p>{task.category}</p>
      <i className="id">{task.id}</i>
      <Button
        buttonType="button"
        onClick={handleToggle}
      >
        {!task.done ? "Done" : "Not done"}
      </Button>
      <Button
        buttonType="button"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </StyledDetailPageWrap>
  );
};
