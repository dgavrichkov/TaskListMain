import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getTask as getTaskFromState } from "../../store/selectors/getTask";
import { Button } from "../Button";
import { StyledDetailPageWrap } from "../styled/StyledDetailPageWrap";

type ParamTypes = {
  taskId: string;
};

export const TaskPage = () => {
  const { taskId } = useParams<ParamTypes>();
  const task = useTypedSelector((state) => getTaskFromState(state, taskId));
  const { delTaskAction, toggleTaskAction } = useActions();
  const navigate = useNavigate();
  return (
    <>
      {typeof task === "object" && (
        <StyledDetailPageWrap className={task.done === true ? "is-done" : ""}>
          <h3>{task.name}</h3>
          <p>{task.tag}</p>
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
      )}
    </>
  );
};
