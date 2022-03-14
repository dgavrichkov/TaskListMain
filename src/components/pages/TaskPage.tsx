import { useParams } from "react-router-dom"
import styled from "styled-components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getTaskFromState } from "../../store/selectors/task";
import { Button } from "../Button";
import { StyledDetailPageWrap } from "../styled/StyledDetailPageWrap";

type ParamTypes = {
    taskId: string
}

export const TaskPage = () => {
    const { taskId } = useParams<ParamTypes>();
    const task = useTypedSelector((state) => getTaskFromState(state, taskId))

    return (
        <>
            {typeof task === "object" && 
            <StyledDetailPageWrap className={task.done === true ? "is-done" : ""}>
                <h3>{task.name}</h3>
                <p>{task.tag}</p>
                <i className="id">{task.id}</i>
                <Button
                    buttonType="button"
                    onClick={() => {
                        console.log("boo");
                    }}
                >{!task.done ? "Done" : "Not done"}</Button>
            </StyledDetailPageWrap>}
        </>
    )
}