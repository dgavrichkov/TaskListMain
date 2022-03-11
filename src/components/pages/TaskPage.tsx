import { useParams } from "react-router-dom"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getTaskFromState } from "../../store/selectors/task";

type ParamTypes = {
    taskId: string
}

export const TaskPage = () => {
    const { taskId } = useParams<ParamTypes>();
    const task = useTypedSelector((state) => getTaskFromState(state, taskId))

    return (
        <>
            {typeof task === "object" && 
            <div>
                <h3>{task.name}</h3>
                <p>{task.tag}</p>
            </div>}
        </>
    )
}