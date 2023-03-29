import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getTask as getTaskFromState } from "../../store/selectors/getTask";
import { Button } from "../../shared/ui";
import { StyledDetailPageWrap } from "../../shared/layouts";

type ParamTypes = {
  taskId: string;
};

export const Task = () => {
  const { taskId } = useParams<ParamTypes>();
  const task = useTypedSelector((state) => getTaskFromState(state, taskId));
  const { delTaskAction, toggleTaskAction } = useActions();
  const navigate = useNavigate();

  if (typeof task === "boolean") {
    return null;
  }

  return (
    <StyledDetailPageWrap className={task.done === true ? "is-done" : ""}>
      <h3>{task.name}</h3>
      <p>{task.category}</p>
      <i className="id">{task.id}</i>

      <Button
        buttonType="button"
        onClick={() => {
          toggleTaskAction(task);
        }}
      >
        {!task.done ? "Done" : "Not done"}
      </Button>
      <Button
        buttonType="button"
        onClick={() => {
          delTaskAction(task.id);
          navigate("../tasks", { replace: true });
        }}
      >
        Delete
      </Button>
    </StyledDetailPageWrap>
  );
};
